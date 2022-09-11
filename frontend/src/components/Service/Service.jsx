import React from 'react'
import "./Service.css"
import { useNavigate } from "react-router-dom";


function Service() {
    const navigate = useNavigate();

  return (
    <div>
        <h2 className='choose'><span>Choose your prefered service from the options below:</span></h2>

        <div className="images">
            <img src={require("/Users/ryanxete/Desktop/Projects/NeedSnap/frontend/src/needsnap-resources/andre-tan-pRppMPh4Zho-unsplash.jpg")} alt="carwash" className='img2'/>
            <button onClick={() => navigate("/carwash")} className="btn">Car Wash</button>
            <img src={require("/Users/ryanxete/Desktop/Projects/NeedSnap/frontend/src/needsnap-resources/window+tint+in+florida-960w.webp")} alt="carwash" className='img3'/>
            <button onClick={() => navigate("/cartint")} className="btn">Car Tint</button>
        </div>
    </div>
  )
}

export default Service