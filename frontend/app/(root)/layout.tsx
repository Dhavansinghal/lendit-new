import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';
import Image from 'next/image'
import { getLoggedInUser } from '@/lib/action/user.action';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = await getLoggedInUser();

  return (
   <main className="flex h-screen w-full font-inter">

    <Sidebar user={loggedIn} />
    <div className='flex size-full flex-col'>
      <div className='root-layout'>
        <Image 
          src='/icon/logo.svg'
          width={30}
          height={30}
          alt='Logo'
        />
        <div>
          <MobileNav user={loggedIn} />
        </div>
      </div>
      {children}
    </div>
    
   </main>
  );
}
