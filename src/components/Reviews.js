import React, { useEffect } from 'react'
import { FaStar } from "react-icons/fa";
import man_one from "../images/man_one.png";
import man_two from "../images/man_two.png";
import man_three from "../images/man_three.png";
const Reviews = () => {

  return (
    <section id="reviews" className='pt-40 pb-40'>
        <div className='container reviews_title  mx-auto'>
           <h3  className='font-Roboto font-bold text-5xl  text-primary'>What people says</h3>
          <p style={{
            borderBottom: "1px solid #000",
            textAlign: 'center',
            margin: '0px auto',
            width: '90px',
          }}>All Reviews -</p>
        </div>
        <div className='container mx-auto grid grid-cols-3 justify-items-center pt-8'>
        <div className='reviews_content  bg-secondary py-12 px-8 mx-2'>
           <p className='font-Poppins font-thin text-paragraph_two text-sm pb-12 leading-5'>“Quite a stressful experience was made super simple. She always gets back to any queries within day & can be trusted every step of way, was absolutely awesome to work.”</p>
          <div className='flex items-center'>
            <img className='mr-4' src={man_two} alt="img" />
            <div className='profile_info'>
               <span className='text-primary font-medium'>Joe Elia</span>
               <br />
               <small className='font-Poppins font-thin text-paragraph_two text-xs'>User Interface Design</small>
            </div>
            <div className='flex items-center pl-8'>
                <span className='font-roboto font-medium text-primary text-xs'>4.00</span>
                &nbsp;
                <div className='flex items-center text-accent text-xs'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
            </div>
         </div> 
        </div>
        <div className='reviews_content  bg-secondary py-12 px-8 mx-2'>
           <p className='font-Poppins font-thin text-paragraph_two text-sm pb-12 leading-5'>“We are so happy to receive such a positive review of your experience! It's great to hear how amazing has been every step of the way, answering.”</p>
          <div className='flex items-center'>
            <img className='mr-4' src={man_three} alt="img" />
            <div className='profile_info'>
               <span className='text-primary font-medium'>Paul Cris</span>
               <br />
               <small className='font-Poppins font-thin text-paragraph_two text-xs'>User Interface Design</small>
            </div>
            <div className='flex items-center pl-8'>
                <span className='font-roboto font-medium text-primary text-xs'>4.00</span>
                &nbsp;
                <div className='flex items-center text-accent text-xs'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
            </div>
         </div> 
        </div>
        <div className='reviews_content  bg-secondary py-12 px-8 mx-2'>
           <p className='font-Poppins font-thin text-paragraph_two text-sm pb-12 leading-5'>“Quite a stressful experience was made super simple. She always gets back to any queries within day & can be trusted every step of way, was absolutely awesome to work.”</p>
          <div className='flex items-center'>
            <img className='mr-4' src={man_one} alt="img" />
            <div className='profile_info'>
               <span className='text-primary font-medium'>Paul Cris</span>
               <br />
               <small className='font-Poppins font-thin text-paragraph_two text-xs'>User Interface Design</small>
            </div>
            <div className='flex items-center pl-8'>
                <span className='font-roboto font-medium text-primary text-xs'>4.00</span>
                &nbsp;
                <div className='flex items-center text-accent text-xs'>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
            </div>
         </div> 
        </div>
        
        
        </div>
    </section>
  )
}

export default Reviews