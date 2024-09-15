import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './footer.css'

// Footer component
const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <Link to='/'><img src={assets.logo} alt="logo" className='footer-logo' /></Link>
    
    

    <div className='list'>
      <ul>
        <li>Tel:075 2452869</li>
        <li>2/6/c,Gannoruwar Road,Peradeniya</li>
        
      </ul>
      <div className='social-media'>
      <div className='social-media-icon'>
        <a href='https://www.facebook.com/'><img className='fb-fb' src={assets.fb_img}/></a>
        <a href='https://www.youtube.com/'><img className='yt-yt' src={assets.yt_img}/></a>
        <a href='https://www.whatsapp.com/'><img className='wh-wh' src={assets.wh_img}/></a>
      </div>
      </div>
      
    
    </div>
    <hr/>
      <p className='copyright'>�� 2024 Forever. All rights reserved.</p>  
    
    
      
    
    
      
    </div>
  )
}

export default Footer
