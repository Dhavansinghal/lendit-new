import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {

    const loggedIn = {firstName : 'Dhavan'};

  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                    type="greeting"
                    title="welcome"  
                    user={loggedIn?.firstName || 'Admin'}
                    subtext="Acces and manage your account and tractions efficiently"           
                />

            </header>
        </div>
    </section>
  )
}

export default Home