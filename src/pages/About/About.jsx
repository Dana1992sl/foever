import React from 'react'

import { assets } from '../../assets/assets'
import './About.css'

const About = () => {
  return (
    <>
    <div className='about'>
    <div className='about-img'>
        <img src={assets.about_img}/>
    </div>
    <div className='about-text'>
     <h1>ABOUT US</h1>
     <p>Forever was born out of a passion for innovation and a desire to revolutionized the way people shop Online.Our journey began with a simple idea:top provide a platform where customers can easily discover, explore and purchase a wide range of products from the comfort of their homes.<br/>
     Since our Inception, we have worked tirelessly to curate to diverse selection of high-quality products that cater to every taste and preferences.From fashion and beauty to electronics and home essentials,We offer an extensive collection source from trusted brands and suppliers.    </p>
     <h1 className='MISSION'>OUR MISSION</h1>
     <p>Our mission of Forever is to empower customers with choice, convenience and confidence.we dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.  </p>
     </div>
    </div>

    <div className='content'>
    <h2>WHY CHOOSE US-</h2>
    <div className='content-container'>
     <div className='quality1'>
        <h2>QUALITY ASSURANCE</h2>
        <p>We meticulously select and vet each product to ensure it meets our stringent quality standards </p>
     </div>
     <div className='quality2'>
        <h2>CONVENIENCE</h2>
        <p>With our User friendly interface and hassle-free ordering process, shopping has never been easier. </p>


     </div>
     <div className='quality3'>
        <h2>EXCEPTIONAL CUSTOMER SERVICE</h2>
        <p>Our team dedicated professionals is here to assist you the way ensuring your satisfaction is our top priority.  </p>
     </div>
     </div>

     </div>
     </>
  )
}

export default About
