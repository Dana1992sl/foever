import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  return (
    <div className='signup'>
    <form className='Signup-form'>
      <h1 className='Signup-title'>SIGN-UP</h1>

      <input type="text" placeholder="Username" className='username' /><br/>
      <input type="email" placeholder="Email" className='email' /><br/>
      <input type="password" placeholder="Password" className='password' />
      <div className='signup-det'>
      <a>forgot your Password?</a>
      <Link to='/login'><a className='sign-in'>Login</a></Link></div>
      <button className='Sign-btn'>SIGN-Up</button>
      
    </form>      
    </div>
  )
}

export default Signup
