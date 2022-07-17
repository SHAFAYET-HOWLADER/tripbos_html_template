import React, { useState } from 'react'
import popular_img from "../images/popular.png";
import girl_image from "../images/girl.png";
import desti_img from "../images/desti_one.png";
import desti_img2 from "../images/desti_two.png";
import { FaStar } from "react-icons/fa";
import "./Popular.css";
const Popular = () => {
 const [grecce, setgrecce] = useState(true) 
 const [newYork, setNewYork] = useState(false) 
 const [morocco, setMorocco] = useState(false) 
 const [paris, setParis] = useState(false) 
 const grecceImage =()=>{
  if(grecce == false){
    setgrecce(true)
    setNewYork(false)
    setParis(false)
    setMorocco(false)
  }
 }
 const newYorkImage =()=>{
  if(newYork == false){
    setNewYork(true)
    setgrecce(false)
    setMorocco(false)
    setParis(false)
  }
 }
 const moroccoImage =()=>{
  if(morocco == false){
    setMorocco(true)
    setgrecce(false)
    setNewYork(false)
    setParis(false)
  }
 }
 const parisImage =()=>{
  if(paris == false){
    setParis(true)
    setgrecce(false)
    setNewYork(false)
    setMorocco(false)
  }
 }

  return (
    <section id="popular" className='bg-secondary py-24 w-screen'>
        <div className='section_title text-center mx-auto container'>
          <h3 className='font-Roboto font-medium text-6xl  text-primary pb-7'>Popular destinations</h3>
          <p className='w-[610px] font-Poppins font-normal mx-auto text-paragraph text-sm pb-20'>Comfort, stress-free life, true happiness are part of luxury lifestyle. However, remember that  luscious lifestyle costs money to maintain.</p>
        </div>
        <div className='container flex  justify-around mx-auto'>
            <div className='flex flex-col'>
                <a onClick={grecceImage}
                className={grecce? "text-accent border-b-2 cursor-pointer mb-12 font-Roboto font-medium text-5xl text-primary w-[150px] transition-all" : "text-primary mb-12 cursor-pointer font-Roboto font-medium text-5xl"}
                  >
                  Grecce
                  </a>
                <a onClick={newYorkImage} 
               className={newYork? "text-accent border-b-2 cursor-pointer mb-12 font-Roboto font-medium text-5xl text-primary w-[195px] transition-all" : "text-primary mb-12 cursor-pointer font-Roboto font-medium text-5xl"}
               >
                  NewYork
                  </a>
                <a onClick={moroccoImage} 
                className={morocco? "text-accent border-b-2 cursor-pointer mb-12 font-Roboto font-medium text-5xl text-primary w-[190px] transition-all" : "text-primary mb-12 cursor-pointer font-Roboto font-medium text-5xl"}
                >
                  Morocco
                  </a>
                <a onClick={parisImage} 
                  className={paris? "text-accent border-b-2 cursor-pointer mb-12 font-Roboto font-medium text-5xl text-primary w-[110px] transition-all" : "text-primary mb-12 cursor-pointer font-Roboto font-medium text-5xl"}
                  >
                  Paris
                  </a>
            </div>
            <div>
             {
              grecce && 
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
             }
             {
              newYork && 
              <div className='popular_img'>
              <img  className='w-[570px] h-[457px]' src={girl_image} alt="img" />
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
             }
             {
              morocco && 
              <div className='popular_img'>
              <img  className='w-[570px] h-[457px]' src={desti_img} alt="img" />
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
             }
             {
              paris && 
              <div className='popular_img'>
              <img  className='w-[570px] h-[457px]' src={desti_img2} alt="img" />
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
             }
            </div>
        </div>
     <div className='text-center'>
     <button className='bg-accent rounded-full py-3 px-14 ml-10 font-roboto font-medium text-white mt-24'>Explore More</button>
     </div>
    </section >
  )
}

export default Popular