import DashboardCard from '@/components/DashboardCard'
import { HeaderBox } from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getTransactionDashboard } from '@/lib/action/transaction.actions'
import { getLoggedInUser } from '@/lib/action/user.action'
import { parseStringify } from '@/lib/utils'
import React from 'react'


const Home = async ({searchParams:{id,page}}:SearchParamProps) => {

  const loggedIn = await getLoggedInUser();
  const {metal, transactions, totalTransaction }:any = await getTransactionDashboard({userId: loggedIn?.userId});
  
  if(!loggedIn) return <div>Not logged in</div>
  if(!transactions) return <div>No Transaction</div>

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext = "Access and Manage Money"
            subtext2 ={"Last Metal Price Updated :" + metal.timestamp}
          />

          {/* <TotalBalanceBox 
            totalTransaction={totalTransaction}
          /> */}
        </header>
        
        {/* <TotalBalanceBox 
            totalTransaction={totalTransaction}
          /> */}

        <DashboardCard 
          amount={metal.goldPrice}
          image="gold"
          title="Current Gold Value"
        />
        <DashboardCard 
          amount={metal.silverPrice}
          image="silver"
          title="Current Silver Value"
        />

        <DashboardCard 
          amount={totalTransaction.goldCurrentPriceTotal}
          image="gold"
          title="Gold hold value"
        />
        <DashboardCard 
          amount={totalTransaction.silverCurrentPriceTotal}
          image="silver"
          title="Silver Hold value"
        />

        <DashboardCard 
          amount={totalTransaction.underpaidTotal}
          image="time"
          title="Total Underpaid"
        />
        <DashboardCard 
          amount={totalTransaction.overpaidTotal}
          image="time"
          title="Total Overpaid"
        />

        <DashboardCard 
          amount={totalTransaction.rentMoneyTotal}
          image="time"
          title="Total Rent Money"
        />
        <DashboardCard 
          amount={totalTransaction.totalInterestTotal}
          image="gold"
          title="Current Interest Value"
        />


goldTotal : 0,
    silverTotal: 0,
    finalAmountTotal : 0,
    assetValueTotal : 0,

      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{},{}]}
      />

    </section>
  )
}

export default Home