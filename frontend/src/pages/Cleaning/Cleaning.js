import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import WWeDoW from "../../components/About/WWeDoW";
import './Cleaning.css'
import AddressPopup from "../../components/PopUp/AddressPopup";
import EmailPopup from "../../components/PopUp/EmailPopup";

function Cleaning() {
  const [user, token] = useAuth();
  const [Cleaning, setCleaning] = useState([]);
  const [AddressPopupbtn, setAddressPopupbtn] = useState(false)
  const [EmailPopupbtn, setEmailPopupbtn] = useState(false)

  useEffect(() => {
    // debugger
    fetchCleaning();
    console.log(user)
    // console.log(Cleaning)
  }, [token]);

  const fetchCleaning = async () => {
    try {
      // debugger
      let response = await axios.get("http://127.0.0.1:8000/api/auth/users/all/", {
        headers: { Authorization: "Bearer " + token,},
      });
      // debugger
      let isCW = response.data.filter(res => res.is_provider == 1 && res.service == 1)
      setCleaning(isCW);
      console.log("yey:", isCW)
      // console.log(Cleaning)
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <WWeDoW />
      <div className='data'>
          {Cleaning.map((entry, index)=>{
          return (
            <div key={index}      className='entered'>
              <h1 className='name'><strong>{entry.username}</strong></h1>
              <h4 className='artist'>{entry.email}</h4>
              <button onClick={() => setAddressPopupbtn(true)} className="btn"><p>Show On Map</p></button>
              <AddressPopup trigger={AddressPopupbtn} setTrigger={setAddressPopupbtn} props={Cleaning}/>
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

export default Cleaning