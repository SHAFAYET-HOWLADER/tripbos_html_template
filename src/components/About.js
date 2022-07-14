import React from 'react'
import about_one from "../images/about_one.png";
import about_two from "../images/about_two.png";
const About = () => {
  return (
    <section id="about" className='pt-40 pb-40'>
        <div className='container mx-auto'>
             <h2 className='font-Roboto font-medium text-6xl w-[900px] text-primary pb-20 pl-[35px]'>World best travel agency company since 2012.</h2>
        </div>
        <div className='flex justify-center items-center'>
            <div className='flex'>
                <img className='w-[300px] h-[438px]' src={about_one} alt="img" />
                <img className='ml-7 mt-14 w-[300px] h-[438px]' src={about_two} alt="img" />
            </div>
            <div className='pl-24'>
                <p className='font-Poppins font-normal text-paragraph text-sm w-[470px]  pb-5'>It might mean having a luxurious home and wardrobe. No matter what your definition of luxury is, these luxury lifestyle tips will help you live your best life!</p>
                <p  className='font-Poppins font-normal text-paragraph text-sm w-[470px]'>Comfort, stress-free life, true happiness are part of luxury lifestyle. However, remember that  luscious lifestyle costs money to maintain...</p>
              <button className='bg-accent rounded-full mt-10  py-4 px-14 font-roboto font-medium text-white'>About us</button>
            </div>
        </div>
    </section>
  )
}

export default About