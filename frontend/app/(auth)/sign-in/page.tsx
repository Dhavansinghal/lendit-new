import AuthForm from '@/components/AuthForm'
import React from 'react'

export const SignIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type='SignIn' />
    </section>
  )
}
export default SignIn