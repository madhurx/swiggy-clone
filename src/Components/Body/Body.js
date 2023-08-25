import React from 'react'
import BodyBanner from './MainPage/BodyBanner'
import CategoryWidget from './MainPage/CategoryWidget'
import TopRestroWidget from './MainPage/TopRestroWidget'
import Restaurants from './MainPage/Restaurants'

const Body = () => {
  return (
    <div>
      <BodyBanner/>
      <CategoryWidget/>
      <TopRestroWidget/>
      <Restaurants/>
    </div>
  )
}

export default Body
