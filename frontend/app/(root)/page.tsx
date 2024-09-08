import { HeaderBox } from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = {
  $id: "string",
  firstName : 'Dhavan', 
  lastName:'Singhal',
  email: 'dhavansinghal@gmail.com',
  userId: "string",
  dwollaCustomerUrl: "string",
  dwollaCustomerId: "string",
  address1: "string",
  city: "string",
  state: "string",
  postalCode: "string",
  dateOfBirth: "string",
  ssn: ""
}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext = "Access and Manage Account and git"
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.36}
          />
        </header>

        RECENT TRANSACTION
      </div>
      <RightSidebar
        user={loggedIn}
        tansactions={[]}
        banks={[{},{}]}
      />

    </section>
  )
}

export default Home