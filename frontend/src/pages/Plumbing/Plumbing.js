import React from 'react'
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import WWeDoT from '../../components/About/WWeDoT';
import AddressPopup from "../../components/PopUp/AddressPopup";
import EmailPopup from "../../components/PopUp/EmailPopup";

function CarTint() {

  const [user, token] = useAuth();
  const [CarTint, setCarTint] = useState([]);
  const [AddressPopupbtn, setAddressPopupbtn] = useState(false)
  const [EmailPopupbtn, setEmailPopupbtn] = useState(false)

  useEffect(() => {
    // debugger
    fetchCarTint();
    // console.log(CarTint)
  }, [token]);

  const fetchCarTint = async () => {
    try {
      // debugger
      let response = await axios.get("http://127.0.0.1:8000/api/auth/users/all/", {
        headers: { Authorization: "Bearer " + token,},
      });
      // debugger
      let isCT = response.data.filter(res => res.is_provider == 1 && res.service == 2)
      setCarTint(isCT);
      console.log("yey:", isCT)
      console.log(CarTint)
    } catch (error) {
      console.log(error.response.data);
    }
  };


  return (
    <div>
    <WWeDoT />
      <div className='data'>
        {CarTint.map((entry, index)=>{
        return (
          <div key={index}      className='entered'>
            <h1 className='name'><strong>{entry.username}</strong></h1>
            <h4 className='artist'>{entry.email}</h4>
            <button onClick={() => setAddressPopupbtn(true)} className="btn"><p>Show On Map</p></button>
            <AddressPopup trigger={AddressPopupbtn} setTrigger={setAddressPopupbtn} props={CarTint}/>
            <button onClick={() => setEmailPopupbtn(true)} className="btn"><p>Send Email</p></button>
            <EmailPopup trigger={EmailPopupbtn} setTrigger={setEmailPopupbtn}>
              <h3>the email Popup b</h3>
            </EmailPopup>
          </div>
        );
        })}
      </div>
  </div>
  )
}

export default CarTint