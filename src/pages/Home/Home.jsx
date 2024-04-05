import React from 'react'
import Slider from '../../components/Slider/Slider'
import AnnouncementBar from '../../components/AnnouncementBar/AnnouncementBar';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
        <AnnouncementBar text = "Free Shipping for orders above $50"/>
        <Slider/>
        <FeaturedProducts type="featured"/>
        <Categories/>
        <FeaturedProducts type="trending"/>
        <Contact/>
    </div>
  )
}

export default Home

