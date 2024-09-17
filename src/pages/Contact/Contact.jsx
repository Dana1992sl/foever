import React from 'react'
import { assets } from '../../assets/assets'
import './Contact.css'

const Contact = () => {
  return (
    <><h1 className='head'>CONTACT US</h1>
    <div className='content'>
    
    <div className='content-img'>
    <img src={assets.contact_img}/>
    <div className='content-text'>
        <h2>Our Store</h2>
        <p>54709 Wilms Station<br/>Suit 350,Washington, USA</p><br/>
        <p>Tel:(415)555-0132<br/>Email:admin@forever.com</p>
        <br/>

        <h2>Careers at Forever</h2>
        <p>Learn more about our terms and job openings</p>
        <button className='btn-btn'>Explore Jobs</button>
    </div>

    </div>
    
    
    
      
    </div>
    </>
  )
}

export default Contact
