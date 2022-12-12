import React from 'react'
import "./Service.css"
import { useNavigate } from "react-router-dom";

import image from "../../needsnap-resources/19497.jpg"
import image2 from "../../needsnap-resources/8612.jpg"


function Service() {
    const navigate = useNavigate();

  return (
    <div className='service'>
        <h2 className='choose'>Choose your prefered service from the options below:</h2>
        <div className="images">
                <a href="/Plumbing">
                <img src={image} alt="Cleaning" className='img3'/>
                </a>
                <button onClick={() => navigate("/Plumbing")} className="btn">Plumbing </button>
                <a href='/Cleaning'>
                <img src={image2} alt="Cleaning" className='img3'/>
                </a>
                <button onClick={() => navigate("/Cleaning")} className="btn">Cleaning</button>
        </div>
    </div>
  )
}

export default Service