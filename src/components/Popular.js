import React from 'react'
import popular_img from "../images/popular.png";
import { FaStar } from "react-icons/fa";
import "./Popular.css";
const Popular = () => {
  return (
    <section id="popular" className='bg-secondary py-24'>
        <div className='section_title text-center mx-auto container'>
          <h3 className='font-Roboto font-medium text-6xl  text-primary pb-7'>Popular destinations</h3>
          <p className='w-[610px] font-Poppins font-normal mx-auto text-paragraph text-sm pb-20'>Comfort, stress-free life, true happiness are part of luxury lifestyle. However, remember that  luscious lifestyle costs money to maintain.</p>
        </div>
        <div className='container flex  justify-around mx-auto'>
            <div className='flex flex-col'>
                <a className='cursor-pointer hover:text-accent border-accent hover:border-b-4 mb-12 font-Roboto font-medium text-5xl text-primary w-[150px] transition-all'>Grecce</a>
                <a className='cursor-pointer hover:text-accent border-accent hover:border-b-4 mb-12 font-Roboto font-medium text-5xl text-primary  w-[235px] transition-all'>New York -</a>
                <a className='cursor-pointer hover:text-accent border-accent hover:border-b-4 mb-12 ont-Roboto font-medium text-5xl text-primary w-[190px] transition-all'>Morocco</a>
                <a className='cursor-pointer hover:text-accent border-accent hover:border-b-4 mb-12 font-Roboto font-medium text-5xl text-primary  w-[110px] transition-all'>Paris</a>
            </div>
            <div>
            <div className='popular_img'>
                <img  className='w-[570px] h-[457px]' src={popular_img} alt="img" />
                <h3 className=' text-primary text-2xl font-medium img_date'>01/<span className='text-paragraph text-xl font-medium'>04</span></h3>
                <div className='flex justify-between'>
               <div className='flex pt-5'>
               <span className='text-xl text-primary font-medium'>5.00</span>
                    &nbsp; &nbsp;
                   <div className='flex mt-1'>
                   <FaStar className='mx-1 text-icon_color text-sm'/>
                    <FaStar className='mx-1 text-icon_color text-sm'/>
                    <FaStar className='mx-1 text-icon_color text-sm'/>
                    <FaStar className='mx-1 text-icon_color text-sm'/>
                    <FaStar className='mx-1 text-icon_color text-sm'/>
                   </div>
               </div>
                   <h2 className='mt-10 text-primary font-bold'>$920.00</h2>
                </div>
                <h3 className='text-2xl text-primary font-medium'>Miami Beach, Florida</h3>
            </div>
            </div>
        </div>
    </section >
  )
}

export default Popular