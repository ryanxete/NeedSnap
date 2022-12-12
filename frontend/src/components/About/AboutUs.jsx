import React from 'react'
import "./AboutUs.css"

import image from "../../needsnap-resources/2106.q706.011.S.m005.c10.cleaning service.jpg"
import image2 from "../../needsnap-resources/2110.w037.n003.1A.p1.1.jpg"

function AboutUs() {
  return (
    <div className='aboutus'>
      <div className='about'>
        <img src={image} alt="road" className='img1'/>
        <p className='text'>in NeedSnap, we have gathered some of the best Cleaning, Plumbing Service Providers in Houston, Texas and growing! with our licenced  crew, you know your house is in good hands. Here, we have selected the Providers that offer the same price, so it is easier for you to decide based how far the provider locates from you.</p>
      </div>
      <div className='about2'>
        <p className='text2'>in NeedSnap, We are currently limited to 2 services, Cleaning and Plumbing. more to come! </p>
        <img src={image2} alt="road" className='img12'/>
      </div>
    </div>
  )
}

export default AboutUs