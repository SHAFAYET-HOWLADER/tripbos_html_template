import React from 'react'
import { FaAngleDown } from "react-icons/fa";
const Banner = () => {
  return (
    <section id="banner" className='py-[100px] text-shadow_white'>
        <div className='flex justify-center container mx-auto'>
            <div className='banner_content'>
             <h2 className='font-Roboto font-bold text-primary text-6xl leading-24'>Time to explore 
             <br />
             the world</h2> <p className='font-Poppins font-normal text-paragraph text-sm w-[470px] mt-[-40px] ml-[280px] pb-20'>Luxury life means very expensive living style. Person wants to live in big bungalow, he wants expensive car,
              tours & travels etc..</p>
            </div>
        </div>
        <div className='bg-secondary flex  justify-center mx-auto items-center p-8 w-[750px] rounded-xl'>
             <div className='pr-10 '>
                <p className='font-Poppins font-normal text-paragraph_two text-sm '>Location</p>
                <span className='font-roboto font-medium text-primary text-sm '>Miami, USA</span>
             </div>
             <div className='px-10 border-l-2 border-primary border-r-2'> 
                <p className='flex items-center font-Poppins font-normal text-paragraph_two text-sm'>Check in/out <FaAngleDown/></p>
                <span className='font-roboto font-medium text-primary text-sm '>November 25-28, 2021</span>
             </div>
             <div  className='pl-10'>
                <p className='flex items-center font-Poppins font-normal text-paragraph_two text-sm'>Person <FaAngleDown/></p>
                <span className='font-roboto font-medium text-primary text-sm '>02 Person</span>
             </div>
             <button className='bg-accent rounded-full py-4 px-14 ml-10 font-roboto font-medium text-white'>Search</button>
        </div>
    </section>
  )
}

export default Banner