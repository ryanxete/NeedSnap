import React from 'react'
import Email from '../Email/Email'
import "./PopUp.css"

function EmailPopup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            { props.children }
            <Email />
        </div>
    </div>
  ) : null
}

export default EmailPopup