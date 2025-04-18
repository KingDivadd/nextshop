import React from 'react'
import Navbar from '@/components/navbar'
import HeaderSlider from '@/components/header_slider'
import HomeProducts from '@/components/home_products'
import FeaturedProducts from '@/components/featured_products'
import Banner from '@/components/banner'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProducts />
        <Banner />
        <Newsletter />
      </div>
      <Footer />
    </div>
  )
}

export default Home