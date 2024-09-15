import React from 'react'
import './AllCollection.css'

const AllCollection = () => {
  return (
    <div id='collections' className='Collections'>
      <div className='side-bar'>
      
      <h2>CATEGORIES</h2>
        <ul className='side-bar-list'>
        
          <input type='radio' /><li>Men</li>
          <input type='radio'/><li>Women</li>
          <input type='radio'/><li>Kids</li>
        </ul>
      
        
      </div>
    </div>
  )
}

export default AllCollection
