import React, { useCallback, useEffect, useState } from 'react'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/action/user.action';

const PlaidLink = ({user,variant}:PlaidLinkProps) => {
    const router = useRouter();
    
    const [token,setToken] = useState('');

    useEffect(()=>{
        const getLinkToken = async () => {
            const data = await createLinkToken(user);
            setToken(data?.linkToken);
        }

        getLinkToken();
    },[user])

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
        await exchangePublicToken({publicToken: public_token,user});
        router.push('/');

    },[user])

    const config : PlaidLinkOptions = {
        token,
        onSuccess
    }

    const {open, ready} = usePlaidLink(config);

  return (
    <>
        {variant==='primary'?
        (
            <Button 
            onClick={()=> open()}
                className='plaidlink-primary'
                disabled={!ready}   
            >
                Connect Bank
            </Button>
        ): variant==='ghost' ? (
            <Button variant='ghost'>
            Connect ghost
            </Button>
        ):(
            <Button variant='outline'>
            Connect outline
            </Button>
        )}
    </>
  )
}

export default PlaidLink