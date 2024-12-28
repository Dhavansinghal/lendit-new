"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { parseStringify } from "../utils";

const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_TRANSACTION_COLLECTION_ID: TRANSACTION_COLLECTION_ID,
} = process.env;

export const addTransaction = async (transaction: AddTransactionProps) => {
  const { vendorId, gold, silver, rentMoney,rentDate,userId,interestRate } = transaction;

  try {
    const { database } = await createAdminClient();

    const rentDateF  = new Date(rentDate).toISOString();
    const currentDate = new Date().toISOString();

    const addNewTransaction = {
      vendorId: vendorId,
      gold: gold,
      silver: silver,
      userId:userId,
      rentMoney:rentMoney,
      rentDate:rentDateF,
      interestRate:interestRate,
      createdDate:currentDate
    }

    const newTransaction = await database.createDocument(
      DATABASE_ID!,
      TRANSACTION_COLLECTION_ID!,
      ID.unique(),
      {
        ...addNewTransaction
      }
    )

    return parseStringify(newTransaction);

  } catch (error) {
    console.log(error);
  }
}

export const getTransactions = async ({userId}:getBanksProps) => {
  try {
      const { database } = await createAdminClient();
      const vendors = await database.listDocuments(
          DATABASE_ID!,
          TRANSACTION_COLLECTION_ID!,
          [Query.equal('userId', [userId])]
      )

      return parseStringify(vendors.documents);
  }
  catch (error) {
      console.error(error);
  }
}

export const getTransactionsByBankId = async ({bankId}: getTransactionsByBankIdProps) => {
  try {
    const { database } = await createAdminClient();

    const senderTransactions = await database.listDocuments(
      DATABASE_ID!,
      TRANSACTION_COLLECTION_ID!,
      [Query.equal('senderBankId', bankId)],
    )

    const receiverTransactions = await database.listDocuments(
      DATABASE_ID!,
      TRANSACTION_COLLECTION_ID!,
      [Query.equal('receiverBankId', bankId)],
    );

    const transactions = {
      total: senderTransactions.total + receiverTransactions.total,
      documents: [
        ...senderTransactions.documents, 
        ...receiverTransactions.documents,
      ]
    }

    return parseStringify(transactions);
  } catch (error) {
    console.log(error);
  }
}