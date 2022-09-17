import React from 'react'
import "./PopUp.css"
import PMap from '../Map/PMap'

function PAdd(props) {
  // console.log("props:", props)
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button><br/>
            { props.children }<br/>
            <PMap Cleaning={props}/>
        </div>
    </div>
  ) : null
}

export default PAdd