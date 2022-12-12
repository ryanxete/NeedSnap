import React from 'react'
import "./WWW.css"

import image from "../../needsnap-resources/29298.jpg"

function WWeDoW() {
  return (
      <div className='wwd'>
        <div className='ww'>
          <img src={image} alt="road" className='img5'/>
          <p className='ittext'>with <strong>NeedSnap</strong> Cleaning We make life safer, easier, and more enjoyable for you and your family—by taking care of all your house cleaning needs! Whether you are looking for regularly scheduled home cleaning or one-time deep cleaning, we can make your home look and smell brand-new.</p>
        </div>
          <p className='price'>The Price For This Service is $129.99 at any location</p>
      </div>
    
  )
}

export default WWeDoW