import React from 'react'
import desti_one from "../../images/desti_one.png";
import desti_two from "../../images/desti_two.png";
import desti_three from "../../images/desti_three.png";
const Destination = () => {
  return (
    <div>
        <div className='container flex mx-auto justify-end font-Roboto font-medium text-sm text-right'>
        <p className='border-primary border-b-2'>Recent Destinations -</p>
        </div>
      <div className='flex justify-center pt-8'>
       <img className='h-[400px] w-[500px]' src={desti_one} alt="img" />
       <img className='h-[400px] w-[500px] mx-4' src={desti_two} alt="img" />
       <img className='h-[400px] w-[500px]' src={desti_three} alt="img" />
       </div>
    </div>
  )
}

export default Destination