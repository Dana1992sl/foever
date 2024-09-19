import React from 'react'
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
            <button className='payment'>Payment</button>
            </div>
            <div className='cart-item-bottom'>
            <p className='cart-item-quantity'>Quantity: </p>
            <p className='cart-item-total'>Subtotal: ${item.price}</p>
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
