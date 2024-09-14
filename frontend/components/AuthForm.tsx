'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from 'zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2 } from 'lucide-react'

const formSchema = z.object({
    email:z.string().email(),
    password:z.string().min(5)
})

function AuthForm({type}:{type:string}) {
    const [user,setUser] = useState(null);
    const [IsLoading,setIsLoading] = useState(false);
    //1.Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })
    //Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        console.log(values);
        setIsLoading(false);
    }


  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
            <Link href='/' className='cursor-pointer flex items-center gap-1'>
                <Image 
                    src='icon/logo.svg'
                    width={34}
                    height={34}
                    alt="HomeWork Logo"
                    />
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
                HomeWork
                </h1>
            </Link>

            <div className='flex flex-col gap-1 md:gap-3'>
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    {user 
                    ? 'Link Accoun' 
                    : type === 'SignIn'
                        ?   'Sign In'
                        : 'Sign Up'
                    }
                </h1>
                <p className='text-16 font-normal text-gray-600'>
                    {user 
                    ? 'Link you account to get started'
                    : 'Please enter your details'
                    }
                </p>
            </div>
        </header>
        {user ?
            <div className='flex flex-col gap-4'>
            {/*something I have no funcking idea at this point */}
            </div>
        : 
            <>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <div className='form-item'>
                            <FormLabel className='form-label'>Email</FormLabel>
                            <div className='flex w-full'>
                                <FormControl>
                                    <Input placeholder="Enter your email" className='input-class' {...field} />
                                </FormControl>
                                <FormMessage className='form-message mt-2' /> 
                            </div>
                        </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <div className='form-item'>
                            <FormLabel className='form-label'>Password</FormLabel>
                            <div className='flex w-full'>
                                <FormControl>
                                    <Input type="password" placeholder="Enter your password" className='input-class' {...field} />
                                </FormControl>
                                <FormMessage className='form-message mt-2' /> 
                            </div>
                        </div>
                    )}
                />
                <div className='flex flex-col gap-4'>
                    <Button type="submit" disabled={IsLoading} className='form-btn'>
                        {IsLoading ? 
                            <>
                                <Loader2 
                                    size={20}
                                    className='animate-spin'
                                /> &nbsp;
                                Loading...
                            </>
                        : type ==='SignIn'?
                            'Sign In'
                            : 'Sign Up'
                    }
                    </Button>
                </div>
            </form>
            </Form>
            <footer className='flex justify-center gap-1'>
                <p className='text-14 font-normal text-gray-600'>
                    {type ==='SignIn' ?
                    'Don\'t have an account?'
                    : 'Already have an account?'
                    }
                </p>
                <Link href={type ==='SignIn' ? '/sign-up' : '/sign-in'} className='form-link'>
                    {type ==='SignIn' ?
                    'Sign Up'
                    : 'Sign In'
                    }
                </Link>
            </footer>

            </>
        }
    </section>
  )
}

export default AuthForm