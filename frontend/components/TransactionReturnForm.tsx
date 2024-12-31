'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from 'zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

  
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { addTransaction, returnTransactionByTransactionId } from "@/lib/action/transaction.actions"
import { convertNumberToMoney } from "@/lib/utils"



export function TransactionReturnForm({transaction,transactionId}: TransactionReturnFormProps) {

    const [IsOpen, setIsOpen] = useState(false);
    const [IsLoading,setIsLoading] = useState(false);

    function formFunctionFucked () {
        
        return   new Promise((resolve, reject) => {
                    if(transaction){
                        
                        const result = returnTransactionByTransactionId(transactionId);

                        resolve(result); 
                    }
                    else {
                        // console.log(transaction);
                        reject(transaction); 
                    }
                });
    }

    return (
        <>
            <Button className="shadcn-button bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded-lg " variant="outline" onClick={() => setIsOpen(true)} >Returned ?</Button>
            
            <AlertDialog open={IsOpen} onOpenChange={() => setIsOpen(false)}>
                <AlertDialogContent className="bg-white">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Is this vendor returned your full amount? That is Now <b>{convertNumberToMoney(transaction?.finalAmount)}</b>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={(event) => {
							formFunctionFucked().then(() => setIsOpen(false));
							event.preventDefault();
						}} className='add-new-vendor-btn bg-bank-gradient'>Returned</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default TransactionReturnForm


