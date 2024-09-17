import React from 'react';
import { products } from '../../assets/assets';
import './AllCollection.css';



const AllCollection = ({category,setcategory}) => {
 

  return (
    <div id='collections' className='Collections'>
    
      <div className='side-bar'>
      <h1>FILTERS</h1>
      <div className='side-bar-content'>
      
      <h2>CATEGORIES</h2>
        <ul className='side-bar-list'>
        
          <input type='radio' /><li>Men</li>
          <input type='radio'/><li>Women</li>
          <input type='radio'/><li>Kids</li>
        </ul>

      </div>
      
      <div className='side-bar-content1'>
      <h2>TYPE</h2>

        <ul className='side-bar-list'>
        
          <input type='radio' /><li>TopWear</li>
          <input type='radio'/><li>BottomWear</li>
          <input type='radio'/><li>WinterWear</li>
        </ul>

      </div>
      
 
      </div>
      
      <div className='collections-container'>
      <div className='product-list'>
        {products.map((item,index) =>{
          return(<div onClick={()=>setcategory(prev=>prev===item.name?"All":item.name)} key={index} className='Collection__item'>
            <img className={category===item.name?"active":""} src={item.image}/>
            <p>{item.name}</p>
            <p>${item.price}</p>
            
            </div>)

        })}
            
      </div>
      </div>
    </div>
  )
}

export default AllCollection
