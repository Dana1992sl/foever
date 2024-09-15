import React from 'react'
import { assets } from '../../assets/assets'
import './home.css'

const Home = () => {
  return (
    <div className='home' id='Home'>
    <div className='home__container'>
    <div className='home__container__text'>
      <p>_Our Best Seller</p> 
      <h1>Latest Arrivals</h1> 
      <p>Shop Now_</p>
    </div>
      
      <div className='home__container__img'><img src={assets.hero_img}/></div>
      
    </div>
    </div>
  )
}

export default Home
