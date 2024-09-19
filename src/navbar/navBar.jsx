import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import './navBar.css'
const NavBar = () => {
  return (
    <div className='NavBar'>
    <Link to='/'><img src={assets.logo} alt="logo" className='logo'/></Link>
    
      <ul className='navbar-list'>
      <img className='dropdown-icon' src={assets.dropdown_icon}/>
      
        <li><a href='/'>Home</a></li>
        <Link to='/AllCollection'><li><a href='#collections'>Collections</a></li></Link>
        <Link to='/About'><li><a href='#About'>About</a></li></Link>
        <Link to='/Contact'><li><a href='#Contacts'>Contacts</a></li></Link>
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
