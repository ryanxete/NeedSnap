import React from 'react'
import "./AboutUs.css"

function AboutUs() {
  return (
    <div className='aboutus'>
      <div>
        <img src={require("/Users/ryanxete/Desktop/Projects/NeedSnap/frontend/src/needsnap-resources/photo-1563373983-2eb50f3226f8.avif")} alt="road" />
        <p className='about'>in NeedSnap, we have gathered some of the best CarWashes, as well as CarTint shops in Houston, Texas! where you know your car is in good hands. Here, we have selected the shops that offer the same price so it is easier for you to decide based on their locations.</p>
      </div>
    </div>
  )
}

export default AboutUs