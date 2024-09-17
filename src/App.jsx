import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import NavBar from './navbar/navBar'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Item from './pages/item/Item'
import Login from './pages/login/login'
import Signup from './pages/login/Signup'
import AllCollection from './pages/placeOrder/All Collection'


const App = () => {
  return (
    <>
    <div className='app'>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Header/>}/>
    <Route path='/AllCollection' element={<AllCollection/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Signup' element={<Signup></Signup>}/>
    <Route path='/Item' element={<Item/>}/>
    
    
    </Routes>
    
    

      
    </div>
    <Footer/>
    
    </>
  )
}

export default App
