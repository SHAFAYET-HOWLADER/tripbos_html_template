import React from 'react'
import { FaPlay } from "react-icons/fa";
import img from "../images/Video_img.png"
import {useState} from 'react'
import ModalVideo from 'react-modal-video'
const VideoPont = () => {
 const [isOpen, setOpen] = useState(false)
  return (
    <section id="video" className='pt-56 pb-56' style={{
        background: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: 'overlay',
        backgroundColor:'rgba(255, 255, 255, 0.4)',
        backgroundPosition: "center",
        width: '100%'
    }}>
        
        <div className='video_icon flex mx-auto justify-center h-32 w-32 bg-white rounded-full text-accent'>
		 <ModalVideo channel='youtube'  isOpen={isOpen} videoId="tAkUXTvm-xo" onClose={() => setOpen(false)} />
	      <FaPlay onClick={()=> setOpen(true)} className='my-14 cursor-pointer'/>
        </div>
		
    </section>
  )
}
export default VideoPont