'use server';

import { ID,Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { parseStringify } from "../utils";

const {
    APPWRITE_DATABASE_ID: DATABASE_ID,
    APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
    APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
    APPWRITE_VENDOR_COLLECTION_ID: VENDOR_COLLECTION_ID,

  } = process.env;

export const getVendorInfo = async ({ userId }: getUserInfoProps) => {
    try {
        const { database } = await createAdminClient();
        
        const user = await database.listDocuments(
            DATABASE_ID!,
            VENDOR_COLLECTION_ID!,
            [Query.equal('userId', [userId])]
        )

        return parseStringify(user.documents[0]);
    } catch (error) {
        console.log("getUserInfo", error)
    }
}

export const addVendor = async ({  ...userData }: AddVendorParams)=>{
    const { username, usercode, mobilenumber } = userData;

    let newVendorAccount;

    try{
        const { account, database } = await createAdminClient();

        const newUserData = {
            username: username,
            usercode: usercode,
            mobilenumber: mobilenumber
        }

        const newUser = await database.createDocument(
            DATABASE_ID!,
            VENDOR_COLLECTION_ID!,
            ID.unique(),
            {
              ...newUserData
            }
        )

        return parseStringify(newUser);

    }
    catch(error){
        console.error(error);
    }
}