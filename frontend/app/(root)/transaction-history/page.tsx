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
import CategoryBadge from '@/components/CategoryBadge';
import { calculateInterest, formatDateToDisplay, fetchMetalsPrices, convertNumberToMoney } from '@/lib/utils';
import { Button } from '@/components/ui/button';


export default async function TransactionHistory() {
  const appwriteItemId = 456;

  const goldPrice = 7500;
  const silverPrice = 8500;

  // const [goldPrice, setGoldPrice] = useState<number | 1>(1);
  // const [silverPrice, setSilverPrice] = useState<number | 1>(1);

  // useEffect(() => {
  //   const fetchPrices = async () => {
  //     try {
  //       const { goldPrice, silverPrice } = await fetchMetalsPrices();
  //       setGoldPrice(goldPrice); 
  //       setSilverPrice(silverPrice);  
  //     } catch (err) {
        
  //     } finally {
        
  //     }
  //   };
  //   fetchPrices();
  // }, []);


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
              <TableHead>Status</TableHead>
              <TableHead>Given Date</TableHead>
              <TableHead>Gold (gm)</TableHead>
              <TableHead>Silver (gm)</TableHead>
              <TableHead>Given Money</TableHead>
              <TableHead>Interest Rate</TableHead>
              <TableHead>Total Interest</TableHead>
              <TableHead>Final Amount</TableHead>
              <TableHead>Current Asset Value</TableHead>
              <TableHead>Total Time</TableHead>
              <TableHead>Active</TableHead>
              <TableHead className="text-right">Created Date</TableHead>
              <TableHead>Returned?</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions!.map((transaction:any, index:string) =>{
              let temp = {
                amount:transaction.rentMoney,
                startDate:transaction.rentDate,
                endDate: '2025-01-02',
                rate:transaction.interestRate,
              };
              let interCal = calculateInterest(temp);

              let assetValue = (goldPrice*transaction.gold) + (silverPrice*transaction.silver);
              let difference = Number(assetValue) -  Number(interCal.totalAmount);

              let status = Number(difference) >= 0 ? 'Underpaid':'Overpaid' ;
              status = transaction.isActive ? status : 'Returned';

              return (
              <TableRow key={index} >
                <TableCell className="font-medium">{transaction.vendorId}</TableCell>
                <TableCell><CategoryBadge category={status} /> </TableCell>
                <TableCell>{formatDateToDisplay(transaction.rentDate)}</TableCell>
                <TableCell>{transaction.gold} ({convertNumberToMoney(goldPrice*transaction.gold)})</TableCell>
                <TableCell>{transaction.silver} {convertNumberToMoney(silverPrice*transaction.silver)})</TableCell>
                <TableCell>{convertNumberToMoney(transaction.rentMoney)}</TableCell>
                <TableCell>{transaction.interestRate}%</TableCell>
                <TableCell>{convertNumberToMoney(interCal.totalInterest)}</TableCell>
                <TableCell>{convertNumberToMoney((Number(interCal.totalAmount) +Number(interCal.totalInterest)))}</TableCell>
                <TableCell>{convertNumberToMoney(assetValue)}</TableCell>
                <TableCell>{interCal.time}</TableCell>
                <TableCell> {transaction.isActive ?<CategoryBadge category='Given' /> :<CategoryBadge category='Returned' />}</TableCell>
                <TableCell className="text-right">{formatDateToDisplay(transaction.createdDate)}</TableCell>
                <TableCell><Button className="shadcn-button bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded-lg " variant="outline">Returned</Button></TableCell>
              </TableRow>
            )})}
          </TableBody>
        </Table>

      </div>
    </section>
  )
}
