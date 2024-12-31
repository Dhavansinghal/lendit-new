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
import { addTransaction } from "@/lib/action/transaction.actions"
import { convertNumberToMoney } from "@/lib/utils"

const formSchema =  z.object({
    vendorId: z.string().min(1,{
        message: "Select Vendor Plasee",
    }),
    gold: z.number().min(1, {
        message:"Please provide the Gold.",
    }),
    silver: z.number().min(1, {
        message: "Please provide the Silver.",
    }),
    rentDate: z.string().min(1, {
        message: "Please provide the Rent Date.",
    }),
    rentMoney: z.number().min(1,{
        message: "Please provide the amount.",
    }),
    interestRate: z.number().min(1,{
        message: "Please provide the Interest Rate.",
    }),
})



export function TransactionReturnForm({transaction}: Transactions) {

    const [IsOpen, setIsOpen] = useState(false);
    const [IsLoading,setIsLoading] = useState(false);
    
    // const form = useForm({
    //     resolver: zodResolver(formSchema),
    //     defaultValues:{
    //         vendorId:'',
    //         gold:0,
    //         silver:0,
    //         rentMoney:0,
    //         rentDate: '',
    //         interestRate: 0.0
    //     },
    // })

    // async function onSubmit(data: z.infer<typeof formSchema>){
    //     setIsLoading(true);

    //     try{
    //         const userData = {
    //             vendorId: data.vendorId!,
    //             gold: data.gold!,
    //             silver: data.silver,
    //             rentMoney: data.rentMoney!,
    //             rentDate: data.rentDate!,
    //             interestRate: data.interestRate!,
    //             userId: user.userId
    //         }
    //         const newTransaction = await addTransaction(userData);
            
    //     }
    //     catch (error){
    //         console.error(error);
    //     }
    //     finally{
    //         setIsLoading(false);
    //         setIsOpen(false);
    //     }
    // }

    return (
        <>
            <Button className="shadcn-button bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded-lg " variant="outline" onClick={() => setIsOpen(true)} >Returned ?</Button>
            
            <AlertDialog open={IsOpen} onOpenChange={() => setIsOpen(false)} >
                <AlertDialogContent className="bg-white">
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Is this vendor returned your full amount? That is Now <b>{convertNumberToMoney(transaction?.finalAmount)}</b>
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='add-new-vendor-btn bg-bank-gradient'>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default TransactionReturnForm


