import React from 'react'
import { Link } from 'react-router-dom'
import { assets, products } from '../../assets/assets'
import './cart.css'

const Cart = () => {
  
  
  return (
    <div className='cart'>
    <h1>Your Cart</h1>
    <div className='cart-container'>
    {products.map((item)=>{
      return (
        <>
        <div className='cart-item' key={item.id}>
        
          <img src={item.image} alt={item.name}/>
          <div>
            <h2 className='cart-item-name'>{item.name}</h2>
            <p className='cart-item-price'>${item.price}</p>
            <p></p>
            <div className='cart-item-buttons'>
            <button className='bin'><img src={assets.bin_icon}/></button>
            
            
            </div>
            <div className='cart-item-bottom'>
            <p className='cart-item-quantity'>Quantity: </p>
            <p className='cart-item-total'>Subtotal: ${item.price}</p>
          </div>
          <div className='cart-bottom'>
          <div className='cart-bottom-items'>
          <h1>Cart Totals</h1>
          <p></p>
          <hr className='hori'/>
          </div>
          <div className='cart-bottom-items'>
          <p>Subtotal</p>
          <p></p>
          <hr className='hori'/>
          </div>
          <p>Shipping Fee</p>
          <hr className='hori'/>
          <p>total</p>
          <hr className='hori'/>
          <Link to='/Orders'><button className='payment'>Payment</button></Link>
          

          </div>

          </div>
          
          
        </div>
        <hr/>
        </>
      )
    })}
      
    </div>
      
    </div>
  )
}

export default Cart
