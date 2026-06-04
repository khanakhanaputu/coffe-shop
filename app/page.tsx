import React from 'react'
import Hero from './components/HomeComponents/Hero'
import OurRoasting from './components/HomeComponents/OurRoasting'
import CustomerReviews from './components/HomeComponents/CustomerReview'
import Marquee from './components/HomeComponents/Marquee'
import PromoSection from './components/HomeComponents/PromotionSection'
import Footer from './components/Footer'
import CoffeMenu from './components/HomeComponents/CoffeMenu'

export default function Home() {
  return (
    <>
    <Hero></Hero>
    <CoffeMenu></CoffeMenu>
    <Marquee></Marquee>
    <OurRoasting></OurRoasting>
    <CustomerReviews></CustomerReviews>
    <Marquee></Marquee>
    <PromoSection></PromoSection>
    <Footer></Footer>
    </>
  )
}
