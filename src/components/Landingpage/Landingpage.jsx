import React from 'react'
import '../Landingpage/Landingpage.css'
import sr_i from '../../assets/video/sr_i.mp4'
function Landingpage() {
  return (
    <div className='landingpage'>
        <div className="bg-overlay"></div>
        <video src={sr_i} controls autoPlay muted loop class="video-bg"  />
      
    </div>
  )
}

export default Landingpage
