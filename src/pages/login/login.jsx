import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
    <form className='login-form'>
      <h1 className='login-title'>LOGIN</h1>

      <input type="email" placeholder="Email" className='email' /><br/>
      <input type="password" placeholder="Password" className='password' />
      <div className='login-det'>
      <a>forgot your Password?</a>
      <Link to='/Signup'><a>Create Account</a></Link>
      </div>
      <button className='login-btn'>SIGN-IN</button>
      
    </form>      
    </div>
  )
}

export default Login
