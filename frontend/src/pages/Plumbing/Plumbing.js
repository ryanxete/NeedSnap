import React from 'react'
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import WWeDoT from '../../components/About/WWeDoT';
import PAdd from "../../components/PopUp/PAdd";
import EmailPopup from "../../components/PopUp/EmailPopup";
import "../Cleaning/Cleaning.css"

function Plumbing() {

  const [user, token] = useAuth();
  const [Plumbing, setPlumbing] = useState([]);
  const [AddressPopupbtn, setAddressPopupbtn] = useState(false)
  const [EmailPopupbtn, setEmailPopupbtn] = useState(false)
  const [query, setQuery] = useState("")


  useEffect(() => {
    // debugger
    fetchPlumbing();
    // console.log(Plumbing)
  }, [token]);

  const fetchPlumbing = async () => {
    try {
      // debugger
      let response = await axios.get("http://127.0.0.1:8000/api/auth/users/all/", {
        headers: { Authorization: "Bearer " + token,},
      });
      // debugger
      let isCT = response.data.filter(res => res.is_provider == 1 && res.service == 2)
      setPlumbing(isCT);
      console.log("yey:", isCT)
      console.log(Plumbing)
    } catch (error) {
      console.log(error.response.data);
    }
  };


  const item  = Plumbing;
  // console.log("i:", Cleaning)
  // console.log("item:", item)

  const getfilterred = (query, item) => {
    if (!query) {
      return item
    }
    return item.filter((each) => each.username.includes(query))
  }

  let filterred = getfilterred(query, item)

  return (
    <div>
    <WWeDoT />
      <label className="bokon">Search By Name: </label>
      <input type="text" onChange={(e) => setQuery(e.target.value)}/>
      <div className='data'>
        {filterred.map((entry, index)=>{
        return (
          <div key={index}      className='entered'>
            <h1 className='name'><strong>{entry.username}</strong></h1>
            <h4 className='artist'>{entry.email}</h4>
            <button onClick={() => setAddressPopupbtn(true)} className="btn"><p>Show On Map</p></button>
            <PAdd trigger={AddressPopupbtn} setTrigger={setAddressPopupbtn} props={Plumbing}/>
            <button onClick={() => setEmailPopupbtn(true)} className="btn"><p>Send Email</p></button>
            <EmailPopup trigger={EmailPopupbtn} setTrigger={setEmailPopupbtn}>
            </EmailPopup>
          </div>
        );
        })}
      </div>
  </div>
  )
}

export default Plumbing