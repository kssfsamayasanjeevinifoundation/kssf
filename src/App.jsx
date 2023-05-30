import React from 'react'
import Header from './components/Header'
import SideContent from './components/SideContent'
import SideRow from './components/SideRow'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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
