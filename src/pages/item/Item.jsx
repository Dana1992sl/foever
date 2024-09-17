import React from 'react'
import { assets, products } from '../../assets/assets'
import './Item.css'

const Item = () => {
  return (
    <div>
    <div className="container">
        {products.map((Item,index)=>{
            return (
                <div  className="item" key={index}>
                    <img src={assets[Item.image]} alt={Item.name} />
                    <h2>{Item.name}</h2>
                    <p>{Item.description}</p>
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
