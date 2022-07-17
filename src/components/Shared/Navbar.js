import React from 'react'
import CustomLink from './CustomLink'


const Navbar = () => {
  return (
    <section id="navbar">
        <div  className='flex justify-between bg-primary h-24 px-40 w-screen'>
                <div className='navbar_logo mt-1'>
                   <h3 to="/home" className='font-Roboto font-bold text-white text-2xl my-7 cursor-pointer'>Tripbos
                   <span className='font-Roboto font-bold text-accent text-2xl'>.</span>
                   </h3>
                </div>
                 <div className='navbar_right mt-3'>
                     <ul className='my-7  text-white opacity-60 flex'>
                        <li><CustomLink to="/home" className='ml-14'>Home</CustomLink></li>
                        <li><CustomLink to="/vedioStory" className='ml-14'>Stories</CustomLink></li>
                        <li><CustomLink to="/destination" className='ml-14'>Gallery</CustomLink></li>
                        <li><CustomLink to="/popularDestination" className='ml-14'>Destination</CustomLink></li>
                     </ul>
                 </div>
        </div>
    </section>
  )
}

export default Navbar