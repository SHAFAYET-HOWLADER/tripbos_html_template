import React from 'react'

const Navbar = () => {
  return (
    <section id="navbar">
        <div  className='flex justify-between bg-primary h-24 px-40'>
                <div className='navbar_logo mt-1'>
                   <h3 className='font-Roboto font-bold text-white text-2xl my-7'>Tripbos
                   <span className='font-Roboto font-bold text-accent text-2xl'>.</span>
                   </h3>
                </div>
                 <div className='navbar_right mt-3'>
                     <ul className='my-7  text-white opacity-60 flex'>
                        <li><a href="#" className='ml-14 hover:text-accent transition-all border-accent hover:border-b-2'>Stories</a></li>
                        <li><a href="#" className='ml-14 hover:text-accent transition-all  border-accent hover:border-b-2'>Home</a></li>
                        <li><a href="#" className='ml-14 hover:text-accent transition-all border-accent hover:border-b-2'>Gallery</a></li>
                        <li><a href="#" className='ml-14 hover:text-accent transition-all border-accent hover:border-b-2'>Destination</a></li>
                     </ul>
                 </div>
        </div>
    </section>
  )
}

export default Navbar