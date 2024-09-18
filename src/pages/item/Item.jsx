import React from 'react'
import { products } from '../../assets/assets'
import './Item.css'

const Item = () => {
  return (
    <div>
    <div className="container">
        {products.map((item,index)=>{
            return (
                <div  className="item" key={index}>
                    <img src={item.image} />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>{item.category}</p>
                    <p>{item.subCategory}</p>
                    <p>{item.sizes}</p>
                    <p>{item.date}</p>
                    <p>{item.bestseller}</p>
                    <button>Add to Cart</button>
                </div>
            )
        })}
    </div>
      
    </div>
  )
}

export default Item
