'use client'

import React from 'react'
import { getLoggedInUser } from '@/lib/action/user.action'
import { getAccount, getAccounts } from '@/lib/action/bank.actions';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


const MyBanks = async () => {

  const loggedIn = await getLoggedInUser();
  const stringuser = loggedIn.userId;
  const accounts = getAccounts({userId: loggedIn?.$id});

  if(!accounts) return <div>No accounts</div>

  const accountData = [];
  const appwriteItemId = 423;

  const currentPage =  1;



  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    usercode: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    mobilenumber: z.number().min(10, {
      message: "Mobile number must be at least 10 characters.",
    }),
  });

  //1.Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
        usercode : '',
        mobilenumber : 0
      }
  });
  //Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
      try{
        const userData = {
          username: data.username!,
          usercode: data.usercode!,
          mobilenumber: data.mobilenumber
        }
      }
      catch (error){
          console.error(error);
      }
  }
  

  return (
    <section className='home'>
      <div className='home-content'>

        <header className='flex items-center justify-between' >
            <h2 className='recent-transactions-label'>Vendors</h2>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className='add-new-vendor-btn ml-5 bg-bank-gradient'>Add New Vendor</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Vendor</DialogTitle>
                    <DialogDescription>
                      This will be added as a new vendor. 
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                          <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                  <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                  This is your public display name.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="submit">Submit</Button>
                        </form>
                      </Form>
                    </div>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

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

export default MyBanks