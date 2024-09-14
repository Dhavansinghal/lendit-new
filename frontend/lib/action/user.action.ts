'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const SignIn = async ( ) => {
    setIsLoading(true);
    try {
        if (type === 'SignIn') {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            const data = await response.json();
            if (data.status === 'success') {
                setIsLoading(false);
                return data.message;
            } else {
                setIsLoading(false);
                return data.message;
            }
        }
    } catch (error) {
        setIsLoading(false);
        return 'An error occurred while signing in.';
    }
};


export const signUp = async (userData : SignUpParams)=>{
    try{
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
        ID.unique(), 
        userData.email, 
        userData.password, 
        `${userData.firstName} ${userData.lastName}`);

        const session = await account.createEmailPasswordSession(userData.email, userData.password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
          });
        
        return parseStringify(newUserAccount)

  
    }
    catch(error){
        console.error(error);
    }
}
export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }
  