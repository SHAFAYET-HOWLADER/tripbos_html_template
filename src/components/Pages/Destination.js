import React from 'react'
import desti_one from "../../images/desti_one.png";
import desti_two from "../../images/desti_two.png";
const Destination = () => {
  return (
    <section id="destination">
        <div className='container flex justify-end'>
          <span className='font-Roboto font-medium text-sm border-primary border-b-2'>Recent Destinations -</span>
        </div>
        <div className='flex pt-8 items-center w-screen  justify-between'>
            <div>
              <img  src={desti_one} alt="img" />
            </div>
            <div className='mx-8'>
              <img  src={desti_two} alt="img" />
            </div>
            <div>
              <img  src={desti_one} alt="img" />
            </div>
        </div>
    </section>
  )
}

export default Destination