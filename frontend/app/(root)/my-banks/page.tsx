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

import AddVendorForm from '@/components/AddVendorForm';
import { getLoggedInUser } from '@/lib/action/user.action';
import { redirect } from 'next/navigation';


export default async function MyBanks () {
  
  const appwriteItemId = 456;

  const user = await getLoggedInUser();

  if(!user) redirect('/SignIn');

  return (
    <section className='home'>
      <div className='home-content'>

        <header className='flex items-center justify-between' >
            <h2 className='recent-transactions-label'>Vendors</h2>
            <div>
              <AddVendorForm user={user}  />

              <Link href={`/transactions/?id=${appwriteItemId}`} className='view-all-btn ml-5'>
                  View All
              </Link>
            </div>
        </header>

        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV002</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV003</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </div>
    </section>
  )
}