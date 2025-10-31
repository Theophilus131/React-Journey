
import React from 'react'

import Header from '../components/Header'
import SideBar from '../components/SideBar'
import AllProducts from '../components/AllProducts'
import Footer from '../components/Footer'


export const HomePage = () => {

  return (

    <div>
        <Header/>
    
        <div>
            <SideBar/>
            <AllProducts/>
        </div>

            <Footer/>
           


    </div>
  )
}

export default HomePage