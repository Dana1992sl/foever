import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../assets/assets';
import './AllCollection.css';



const AllCollection = ({category,setcategory}) => {
 

  return (
    <>
    <div className='select'>
    <h1>All COLLECTION</h1>
      <select value={category} onChange={(e) => setcategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Sort By: Relevant">Sort By: Relevant</option>
        <option value="Sort By: High to Low">Sort By: High to Low</option>
        <option value="Sort By: Low to High">Sort By: Low to High</option>
      </select>
    </div>
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
          return(<div  key={index} className='Collection__item'>
            <Link to='/Item'><img  src={item.image}/></Link>
            <p>{item.name}</p>
            <p>${item.price}</p>
            
            </div>)

        })}
            
      </div>
      </div>
    </div>
    </>
  )
}

export default AllCollection
