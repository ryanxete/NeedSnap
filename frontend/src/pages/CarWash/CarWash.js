import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import WWeDoW from "../../components/About/WWeDoW";
import './CarWash.css'
import PopUp from "../../components/PopUp/PopUp";

function CarWash() {
  const [user, token] = useAuth();
  const [carwash, setCarWash] = useState([]);
  const [popupbtn, setPopupbtn] = useState(false)

  useEffect(() => {
    // debugger
    fetchCarWash();
    // console.log(carwash)
  }, [token]);

  const fetchCarWash = async () => {
    try {
      // debugger
      let response = await axios.get("http://127.0.0.1:8000/api/auth/users/all/", {
        headers: { Authorization: "Bearer " + token,},
      });
      // debugger
      let isCW = response.data.filter(res => res.is_provider == 1 && res.service == 1)
      setCarWash(isCW);
      console.log("yey:", isCW)
      console.log(carwash)
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <WWeDoW />
      <div className='data'>
          {carwash.map((entry, index)=>{
          return (
            <div key={index}      className='entered'>
              <h1 className='name'><strong>{entry.username}</strong></h1>
              <h4 className='artist'>{entry.email}</h4>
              <button onClick={() => setPopupbtn(true)} className="btn">More Info</button>
              <PopUp trigger={popupbtn} setTrigger={setPopupbtn}>
                <h3>the popup b</h3>
              </PopUp>
            </div>
          );
          })}
      </div>
    </div>
  )
}

export default CarWash