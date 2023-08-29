import React from 'react'
import SearchLocation from './SearchLocation'
import LandingPgInfo from './LandingPgInfo'
import MobileAd from './MobileAd'
import AboutFooter from './AboutFooter'
import LocationComponent from '../../utils/LocationComponent'

const LandingPage = () => {
  return (
    <div>
      {/* <LocationComponent type="landingHeader"/> */}
      <SearchLocation/>
      <LandingPgInfo/>
      <MobileAd/>
      <AboutFooter/>
      
    </div>
  )
}

export default LandingPage
