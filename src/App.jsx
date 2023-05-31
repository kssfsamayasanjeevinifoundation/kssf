import React from 'react'

import SideContent from './components/SideContent'
import SideRow from './components/SideRow'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './Header'

export default function App() {
  return (
    <div>
        <Header/>
      <Navbar/>
     <SideRow>
      <SideContent/>
      <MainContent/>

     </SideRow>

     <Footer/>

      
    </div>

  )
}
