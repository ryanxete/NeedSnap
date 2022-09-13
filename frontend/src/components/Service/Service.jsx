import React from 'react'
import "./Service.css"
import { useNavigate } from "react-router-dom";


function Service() {
    const navigate = useNavigate();

  return (
    <div className='service'>
        <h2 className='choose'>Choose your prefered service from the options below:</h2>
        <div className="images">
                <a href="/Plumbing">
                <img src={require("/Users/ryanxete/Desktop/Projects/NeedSnap/frontend/src/needsnap-resources/19497.jpg")} alt="Cleaning" className='img3'/>
                </a>
                <button onClick={() => navigate("/Plumbing")} className="btn">Plumbing </button>
                <a href='/Cleaning'>
                <img src={require("/Users/ryanxete/Desktop/Projects/NeedSnap/frontend/src/needsnap-resources/8612.jpg")} alt="Cleaning" className='img3'/>
                </a>
                <button onClick={() => navigate("/Cleaning")} className="btn">Cleaning</button>
        </div>
    </div>
  )
}

export default Service