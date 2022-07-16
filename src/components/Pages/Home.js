import React from 'react'
import About from '../About'
import Banner from '../Banner'
import Discount from '../Discount'
import ExploreWorld from '../ExploreWorld'
import Popular from '../Popular'
import Reviews from '../Reviews'
import VideoPont from '../VideoPoint'
import Destination from './Destination'

const Home = () => {
  return (
    <>
        <Banner/>
        <Destination/>
        <About/>
        <Popular/>
        <Discount/>
        <ExploreWorld/>
        <VideoPont/>
        <Reviews/>
    </>
  )
}

export default Home