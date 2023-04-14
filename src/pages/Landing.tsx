import React from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import MovieCarousel from '../components/MovieCarousel/MovieCarousel'
import CallToAction from '../components/CallToAction/CallToAction'

function LandingPage() {
  return (
    <div className='LandingPage'>
        <HeroBanner />
        <MovieCarousel />
        <CallToAction />
    </div>
  )
}

export default LandingPage