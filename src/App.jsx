import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import NavBar from './navbar/navBar'
import AllCollection from './pages/placeOrder/All Collection'


const App = () => {
  return (
    <>
    <div className='app'>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Header/>}/>
    <Route path='/AllCollection' element={<AllCollection/>}/>
    
    
    </Routes>
    
    

      
    </div>
    <Footer/>
    
    </>
  )
}

export default App
