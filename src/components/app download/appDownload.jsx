import React from 'react'
import { assets } from '../../assets/assets'
import './appDownload.css'

const AppDownload = () => {
  return (
    <>
    <div className='offer'>
    <div className='exchange'>
      <img src={assets.exchange_icon}/>
      <h3>Easy Exchange policy</h3>
      <p>We offer hassle free Exchange policy</p>
    </div>
    <div className='exchange'>
      <img src={assets.quality_icon}/>
      <h3>7 Day Return policy</h3>
      <p>We provide 7 Days free return policy</p>
    </div>
    <div className='exchange'>
      <img src={assets.support_img}/>
      <h3>Best Customer Support</h3>
      <p>We provide 24/7 Customer Support</p>
    </div>
    
    
      
    </div>

    <div className='subscribe'>
      <h2>Subscribe now & get 20% off</h2>
      <div>
      <input type='email' placeholder='Enter your email address' className='input'/>
      <button className='sub-btn'>Subscribe</button>

      </div>
      
    </div>
    
    </>
  )
}

export default AppDownload
