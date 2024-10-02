import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import './navBar.css'

const NavBar = () => {
  const [Sidebar,setSidebar]=useState(false);

  const toggleSidebar =()=>
    setSidebar(prev => !prev);
  
  

  return (
    <div className='NavBar'>
    <Link to='/'><img src={assets.logo} alt="logo" className='logo'/></Link>
    <div className='menu-icon' onClick={toggleSidebar}>
      <img src={assets.menu_icon} />
      </div>

      <ul className='navbar-list'>
        <Link to='/'><li><a href='/'>Home</a></li></Link>
        <Link to='/AllCollection'><li><a href='#collections'>Collections</a></li></Link>
        <Link to='/About'><li><a href='#About'>About</a></li></Link>
        <Link to='/Contact'><li><a href='#Contacts'>Contacts</a></li></Link>
        
      </ul>

      <ul className={Sidebar?'nav-menu active':'nav-menu'}>
        <Link to='/' onClick={toggleSidebar}><li  className='nav-items'><a href='/'>Home</a></li></Link>
        <Link to='/AllCollection' onClick={toggleSidebar}><li className='nav-items'><a href='#collections'>Collections</a></li></Link>
        <Link to='/About' onClick={toggleSidebar}><li className='nav-items'><a href='#About'>About</a></li></Link>
        <Link to='/Contact' onClick={toggleSidebar}><li className='nav-items'><a href='#Contacts'>Contacts</a></li></Link>
        
      </ul>
      
      
    
    <div className='search-icon'>
      <input type='text' className='search' placeholder='Search'></input>
      <img className='search-icon' src={assets.search_icon}/>
      <Link to='login'><button className='btn' >Sign in</button></Link>
      <Link to='/cart'><img src={assets.cart_icon} className='cart-icon' alt="cart"/></Link>
    </div> 
    </div>
  )
}

export default NavBar
