"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { calculateInterest, fetchMetalsPrices, parseStringify } from "../utils";

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
  

      const transactions = await database.listDocuments(
          DATABASE_ID!,
          TRANSACTION_COLLECTION_ID!,
          [Query.equal('userId', [userId])]
      )

      const values =  await fetchMetalsPrices();
      const returnData = {
        metal : values,
        transactions:parseStringify(transactions.documents)
      }


      return refineTransactions(returnData);
  }
  catch (error) {
      console.error(error);
  }
}

export const returnTransactionByTransactionId = async ({transactionId}: any) => {
  try {
    const { database } = await createAdminClient();

    let tt = '67700322000c990e47c9';
    console.log("checking transactionId",tt);
    console.log("checking transactionId",transactionId);

    const returnResult = await database.updateDocument(
      DATABASE_ID!,
      TRANSACTION_COLLECTION_ID!,
      tt,
      {isActive:false}
    )

    return parseStringify(returnResult);

  } catch (error) {
    console.log('Return Transaction issue :',error);
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

const refineTransactions = async ({metal, transactions}: any) => {
  const { goldPrice, silverPrice}  = metal;
  var returnTransactions : any = [];

  transactions!.map((transaction:any, index:string) =>{
    let temp = {
      amount:transaction.rentMoney,
      startDate:transaction.rentDate,
      endDate: new Date().toUTCString(),
      rate:transaction.interestRate,
    };
    let interCal = calculateInterest(temp);

    let goldCurrentPrice = goldPrice*transaction.gold;
    let silverCurrentPrice = silverPrice*transaction.silver;

    let assetValue = goldCurrentPrice + silverCurrentPrice;
    let difference = Number(assetValue) -  Number(interCal.totalAmount);

    let status = Number(difference) >= 0 ? 'Underpaid':'Overpaid' ;
    status = transaction.isActive ? status : 'Returned';

    returnTransactions.push({
        $id: transaction.$id,
        vendorId:transaction.vendorId,
        status,
        rentDate: transaction.rentDate,
        gold : transaction.gold,
        silver: transaction.silver,
        goldCurrentPrice : Number(goldCurrentPrice),
        silverCurrentPrice : Number(silverCurrentPrice),
        rentMoney : Number(transaction.rentMoney),
        interestRate : transaction.interestRate,
        totalInterest : Number(interCal.totalInterest),
        finalAmount : Number((Number(interCal.totalAmount) +Number(interCal.totalInterest))),
        assetValue : Number(assetValue),
        interestTime : interCal.time,
        isActive: transaction.isActive,
        createdDate : transaction.createdDate
    })
  })
  
  const returnData = {
    metal ,
    transactions: returnTransactions
  }


  return returnData;
}