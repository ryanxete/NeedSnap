import React from 'react'
import "./PopUp.css"
import Map from '../Map/Map'

function AddressPopup(props) {
  // console.log("props:", props)
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button><br/>
            { props.children }<br/>
            <Map Cleaning={props}/>
        </div>
    </div>
  ) : null
}

export default AddressPopup