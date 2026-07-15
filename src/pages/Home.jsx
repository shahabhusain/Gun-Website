import React from 'react'
import Hero from '../components/Hero'
import RecallTicker from '../components/RecallTicker'
import FeaturedCategories from '../components/FeaturedCategories'
import FeaturedProducts from '../components/FeaturedProducts'
import PromoCarousel from '../components/PromoCarousel'

const Home = () => {
  return (
    <>
      <Hero />
      <RecallTicker />
      <FeaturedCategories />
      <FeaturedProducts />
      <PromoCarousel />
    </>
  )
}

export default Home
