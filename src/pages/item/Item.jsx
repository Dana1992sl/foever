import React from 'react'
import { products } from '../../assets/assets'
import './Item.css'


const Item = () => {
  const size = ['S','M','L','XL','XXL']
 
  return (
    <>
    <div className='item-container'>
    <div className="container">
        {products.map((item,index)=>{
            return (
                <div  className="item" key={index}>
                    <img className='item-image' src={item.image} />
                    
                    <div className='item-info'>
                    <h2>{item.name}</h2>
                    <p className='price'>${item.price}</p>
                    <p className='discription'>{item.description}</p>
                    <p className='select'>Select Size</p>
                    <div className='buttons'>
                    
                    <button className='sizes'>{size[0]}</button>
                    <button className='sizes'>{size[1]}</button>
                    <button className='sizes'>{size[2]}</button>
                    <button className='sizes'>{size[3]}</button>
                    <button className='sizes'>{size[4]}</button>
                    </div>
                    <button className='btn-cart'>Add to Cart</button>
                    <hr className='horizontal'/>
                    <div className='info'>
                    <p>100% Original Product</p>
                    <p>Cash on Delivery is available on this product</p>
                    <p>Easy return and exchange policy within 7 Days</p></div>
                    </div>
                    
                </div>
                
            )
            
        })}
        
    </div>
    
      
    </div>
    </>
  )
}

export default Item
