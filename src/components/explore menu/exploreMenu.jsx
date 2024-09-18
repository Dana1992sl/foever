import React from 'react'
import { list, products } from '../../assets/assets'
import './exploreMenu.css'


const ExploreMenu = ({image,setImage}) => {
  
  return (
    <div className='Collection'>
    <div className='Collection__container'>
      <div className='Collection__wrapper'>
        <h1>LATEST COLLECTION</h1>
        <p>Find your new style in here.</p>
      </div>
      <div className='Collection-list'>
        {list.map((item,index) =>{
          return(<div onClick={()=>setImage(prev=>prev===item.image)}  key={index} className='Collection__item'  >
            <img className={image===item.image}  src={item.image} />
            <p>{item.name}</p>
            <p>${item.price}</p>
            
            
          </div>)

        })}
      </div>
      <hr/>
      <div className='Collection__wrapper'>
      <h1>BEST SELLERS</h1>

      </div>
      <div className='Collection-list'>
        {products.map((item,index) =>{
          return(<div key={index} className='Collection__item'>
            <img src={item.image}/>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{item.bestseller}</p>
            

            
          </div>)

        })}
      </div>
    </div>
    
    
    

  
      
    </div>
  )
}

export default ExploreMenu
