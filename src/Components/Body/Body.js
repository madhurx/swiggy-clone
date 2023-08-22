import React from 'react'
import BodyBanner from './MainPage/BodyBanner'
import CategoryWidget from './MainPage/CategoryWidget'
import TopRestroWidget from './MainPage/TopRestroWidget'

const Body = () => {
  return (
    <div>
      <BodyBanner/>
      <CategoryWidget/>
      <TopRestroWidget/>
    </div>
  )
}

export default Body
