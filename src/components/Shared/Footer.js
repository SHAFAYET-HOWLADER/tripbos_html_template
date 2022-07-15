import React from 'react'
import { FaTelegramPlane,FaFacebookF,FaInstagramSquare,FaBehanceSquare} from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <section id="footer" className='pt-32 bg-primary'>
        <div className='container mx-auto'>
            <h3 className='text-center font-Roboto font-thin text-4xl  text-white pb-12'>Subscribe to our newsletter</h3>
            <div className='relative footer_input mx-auto flex justify-center'>
                <input type="email" placeholder='Enter your mail' className='py-4 px-4 w-[350px]'/>
                <div className='divider_icon'></div>
                <FaTelegramPlane className='text-2xl absolute right-[490px] top-4'/>
              </div>
        </div>
        <div className='container mx-auto grid grid-cols-4 justify-items-center pt-36'>
            <div>
            <h3 className='font-Roboto font-bold text-white text-2xl'>Tripbos
                   <span className='font-Roboto font-bold text-accent text-2xl'>.</span>
                   </h3>
            </div>
            <div>
                <h3 className='pb-6 font-Roboto font-normal text-white text-2xl'>Links</h3>
                <div className='flex flex-col text-shadow_white text-1xl font-normal footer_hover'>
                <a href="#" className='mb-2 '>Stories</a>
                <a href="#" className='mb-2'>Destinations</a>
                <a href="#" className='mb-2'>Gallery</a>
                <a href="#" className='mb-2'>Contact Us</a>
                </div>
            </div>
            <div >
                <h3 className='pb-6 font-Roboto font-normal text-white text-2xl'>Legal</h3>
              <div className='flex flex-col text-shadow_white text-1xl font-normal footer_hover'>
              <a href="#"  className='mb-2'>Privacy Policy</a>
                <a href="#">Terms of Conditions</a>
              </div>
            </div>
            <div>
                <h3 className='pb-6 font-Roboto font-normal text-white text-2xl'>Location</h3>
          <div className='flex flex-col text-shadow_white text-1xl font-normal footer_hover'>
          <a href="#"  className='mb-2'>767 5th Street,</a>
                <a href="#"  className='mb-7'> 21st Floor, New York, USA</a>
                <span className='flex items-center'>
                  Follow on: 
                 <div className='h-6 w-6 border border-secodary rounded-full text-center text-xs mx-3'>
                 <FaFacebookF className='mt-1 ml-1'/>
                 </div>
                  &nbsp;
                <div className='h-6 w-6 border border-secodary rounded-full text-center text-xs mr-3'>
                <FaInstagramSquare  className='mt-1 ml-1'/>
                </div>
                   &nbsp;
                   <div className='h-6 w-6 border border-secodary rounded-full text-center text-xs'>
                 <FaBehanceSquare className='mt-1 ml-1'/>
                   </div>
                </span>
          </div>
            </div>
        </div>
        <div className='copy_right container text-center pt-16 pb-8'>
             <p className='font-Poppins font-normal text-white text-xs '>&copy;Tripbos {year}. All rights reserved.</p>
        </div>
    </section>
  )
}

export default Footer