import React from 'react'
import { assets } from '../../assets/assets'
import './Orders.css'

const Orders = () => {
  return (
    <>
    
    <div className='Orders'>
    
    <div className='DeliveryInfo'>
    <h1>Delivery Information</h1>
    <div className='name'>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='Last Name'/></div>
        <input type='email' placeholder='Email Address'/>
        <input type='text' placeholder='Address'/>
        <input type='text' placeholder='Phone Number'/>
    </div>
    <div className='PaymentInfo'>
    <h1>Cart Totals</h1>
    
          <p>Subtotal</p>
         
          <hr className='hori'/>
          
          <p>Shipping Fee</p>
          <hr className='hori'/>
          <p>total</p>
          <hr className='hori'/>

          <div className='payment-method'> 
          <h1>PAYMENT METHOD</h1>
          <div className='payment-logo'>
          <button className='stripelogo'><input type='checkbox' className='checkbox'/><img src={assets.stripe_logo}/></button>
          <button className='razorlogo'><input type='checkbox' className='checkbox'/><img src={assets.razorpay_logo}></img></button>
          <button className='paytmlogo'><input type='checkbox' className='checkbox'/>Cash on Delivery</button>
          
          </div>
          <button className='placeorder'>Place Order</button>

          </div>

    </div>
      
    </div>
   
    </>
  )
}

export default Orders
