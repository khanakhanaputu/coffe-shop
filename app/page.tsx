import React from 'react'
import Hero from './components/Hero'
import CoffeMenu from './components/CoffeMenu'
import OurRoasting from './components/OurRoasting'
import CustomerReviews from './components/CustomerReview'

export default function Home() {
  return (
    <>
    <Hero></Hero>
    <CoffeMenu></CoffeMenu>
    <OurRoasting></OurRoasting>
    <CustomerReviews></CustomerReviews>
    </>
  )
}
