import React from 'react'
import map_bg from "../images/map_bg.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./ExploreWorld.css"
const ExploreWorld = () => {
  return (
    <section className=' pt-40 pb-40'>
        <div className='section_title text-center mx-auto container'>
          <h3 className='mx-auto font-Roboto font-bold text-5xl  text-primary pb-10 w-[350px]' style={{
            lineHeight: '55px',
          }}>Explore the world for travel</h3>
          <p className='w-[610px] font-Poppins font-normal mx-auto text-paragraph text-sm pb-20'>Every traveler wants a comfortable hotel experience that puts them in a great location with a friendly staff. Whether they’re heading to a business conference.</p>
      </div>
    <div  className='py-10' style={{
        background: `url(${map_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: '100%'
    }}>
        <div className='world_location container mx-auto grid grid-cols-3 justify-items-center py-12'>
            
           <div className='flex flex-col justify-center mb-24 location_icon'>
           <FaMapMarkerAlt className='location_one text-center mx-auto'/>
            <button>Miami</button>
           </div>
           <div className='flex flex-col justify-center  location_icon'>
           <FaMapMarkerAlt className='location_one text-center mx-auto'/>
           <button>New York</button>
           </div>
           <div className='flex flex-col justify-center  location_icon'>
           <FaMapMarkerAlt className='location_one text-center mx-auto'/>
           <button>Dubai</button>
           </div>
           <div className='flex flex-col justify-center  location_icon'>
           <FaMapMarkerAlt className='location_one text-center mx-auto'/>
           <button>Morocco</button>
           </div>
           <div className='flex flex-col justify-end  location_icon'>
           <FaMapMarkerAlt className='location_one text-center mx-auto'/>
           <button>Grecce</button>
           </div>
           <div className='flex flex-col justify-end  location_icon'>
           <FaMapMarkerAlt className='location_one text-center mx-auto'/>
           <button>Paris</button>
           </div>
        </div>
    </div>
    <div className='review grid grid-cols-3 justify-items-center text-center pt-24'>
              <div className='review_content'>
                   <h2 className='text-primary font-Roboto font-bold text-5xl'>96%</h2>
                   <span className='font-Poppins font-normal text-sm text-primary'>Postive Reviews</span>
              </div>
              <div className='review_content'>
                   <h2  className='text-primary font-Roboto font-bold text-5xl'>2.5k</h2>
                   <span className='font-Poppins font-normal text-sm text-primary'>Awesome Hikers</span>
              </div>
              <div className='review_content'>
                   <h2  className='text-primary font-Roboto font-bold text-5xl'>40+</h2>
                   <span className='font-Poppins font-normal text-sm text-primary'>Stunning Places</span>
              </div>
        </div>
    </section>
  )
}

export default ExploreWorld