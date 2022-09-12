import React from 'react'
import "./PopUp.css"

function AddressPopup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            { props.children }
        </div>
    </div>
  ) : null
}

export default AddressPopup