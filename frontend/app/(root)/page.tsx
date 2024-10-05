import { HeaderBox } from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getAccount, getAccounts } from '@/lib/action/bank.actions'
import { getLoggedInUser } from '@/lib/action/user.action'
import React from 'react'

const Home = async ({searchParams:{id,page}}:SearchParamProps) => {

  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({userId: loggedIn?.$id});
  
  console.log("LoggedInUser",loggedIn)
  console.log("Here is the account Accounts",accounts)

  if(!loggedIn) return <div>Not logged in</div>
  if(!accounts) return <div>No accounts</div>

  const accountData = accounts?.data;
  const appwriteItemId = (id as string) || accountData[0]?.appwriteItemId;

  const account = await getAccount({appwriteItemId});

  const currentPage = Number(page as string) || 1;
  
  console.log("New Account alert",account)

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext = "Access and Manage Accounts"
          />

          <TotalBalanceBox 
            accounts={accountData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>

        <RecentTransactions 
          accounts={accountData}
          totalBanks={accounts?.totalBanks}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={accounts?.transaction}
        banks={accountData?.slice(0,2)}
      />

    </section>
  )
}

export default Home