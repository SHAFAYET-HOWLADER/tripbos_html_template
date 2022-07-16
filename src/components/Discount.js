import React from 'react'
import discount_bg from "../images/discount_bg.png";
import discount_img from "../images/discount_right.png";
import { FaTelegramPlane } from "react-icons/fa";
import "./Discount.css"
const Discount = () => {
  return (
    <section id="discount" className='pt-32' style={{
        background: `url(${discount_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}>
        <div className='discount_content container grid grid-cols-2 justify-items-center mx-auto items-center'>
              <div className='dis_left pb-32'>
               <span className='font-Poppins font-thin text-accent text-base pb-1'>First Purchase offer</span>
               <h3 className='text-6xl font-Roboto text-white font-bold'>Get 20% off</h3>
               <p className='font-Poppins font-thin text-white text-sm py-8 w-[520px] leading-6'>Pretium quam vulputate dignissim suspendisse in est. Suspendisse ultrices gravida dictum fusce ut placerat orci.</p>
              <div className='relative input_area'>
                <input type="email" placeholder='Enter your mail' className='py-4 px-4 w-[500px] rounded-lg'/>
                <div className='vertical_divider'></div>
                <FaTelegramPlane className='text-2xl absolute right-12 top-4'/>
              </div>
              </div>
              <div className='dis_right'>
              <img className='' src={discount_img} alt="img" />
              </div>
        </div>
    </section>
  )
}

export default Discount