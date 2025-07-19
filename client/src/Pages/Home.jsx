import React from 'react'
import HeroSection from '../Components/Home/HeroSection/HeroSection'
import CategoryGrid from '../Components/Home/CategoryGrid/CategoryGrid'
import RecentListings from '../Components/Home/RecentListings/RecentListings'
import HowItWorks from '../Components/Home/HowItWorks/HowItWorks'
import CallToAction from '../Components/Home/CallToAction/CallToAction'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoryGrid />
      <RecentListings />
      <HowItWorks />
      <CallToAction />
    </div>
  )
}

export default Home