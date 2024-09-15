import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import './navBar.css'
const NavBar = () => {
  return (
    <div className='NavBar'>
    <Link to='/'><img src={assets.logo} alt="logo" className='logo'/></Link>
    
      <ul className='navbar-list'>
      
        <li><a href='/'>Home</a></li>
        <Link to='/AllCollection'><li><a href='#collections'>Collections</a></li></Link>
        <li><a href='#About'>About</a></li>
        <li><a href='#Contacts'>Contacts</a></li>
      </ul>
    
    <div className='search-icon'>
      <input type='text' className='search' placeholder='Search'></input>
      <img src={assets.search_icon}/>
      <button className='btn'>Sign in</button>
    </div> 
    </div>
  )
}

export default NavBar
