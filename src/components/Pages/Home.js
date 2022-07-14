import React from 'react'
import About from '../About'
import Banner from '../Banner'
import Popular from '../Popular'
import Destination from './Destination'

const Home = () => {
  return (
    <>
        <Banner/>
        <Destination/>
        <About/>
        <Popular/>
    </>
  )
}

export default Home