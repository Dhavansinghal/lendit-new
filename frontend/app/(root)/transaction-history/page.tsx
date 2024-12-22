import React from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Link from 'next/link';

import TransactionForm from '@/components/TransactionForm';
import { getLoggedInUser } from '@/lib/action/user.action';
import { redirect } from 'next/navigation';
import { getVendors } from '@/lib/action/vendor.actions';
import { getTransactions } from '@/lib/action/transaction.actions';

export default async function TransactionHistory() {
  const appwriteItemId = 456;

  const user = await getLoggedInUser();
  const vendors = await getVendors({userId: user?.userId});
  const transactions = await getTransactions({userId: user?.userId});
  if(!user) redirect('/SignIn');

  return (
    <section className='home'>
      <div className='home-content'>

        <header className='flex items-center justify-between' >
            <h2 className='recent-transactions-label'>Transaction History</h2>
            <div>
              <TransactionForm user={user} vendors={vendors} />

              <Link href={`/transactions/?id=${appwriteItemId}`} className='view-all-btn ml-5'>
                  View All
              </Link>
            </div>
        </header>

        <Table>
          <TableCaption>A list of your recent Transactions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Vendor</TableHead>
              <TableHead>Given Date</TableHead>
              <TableHead>Given Money</TableHead>
              <TableHead>Gold</TableHead>
              <TableHead>Silver</TableHead>
              <TableHead>Active</TableHead>
              <TableHead className="text-right">Created Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions!.map((transaction:any, index:string) => (
              <TableRow key={index} >
                <TableCell className="font-medium">{transaction.vendorId}</TableCell>
                <TableCell>{transaction.rentDate}</TableCell>
                <TableCell>{transaction.rentMoney}</TableCell>
                <TableCell>{transaction.gold}</TableCell>
                <TableCell>{transaction.silver}</TableCell>
                <TableCell>{transaction.isActive}</TableCell>
                <TableCell className="text-right">{transaction.createdDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>
    </section>
  )
}
