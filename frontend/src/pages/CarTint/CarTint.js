import React from 'react'
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import WWeDoT from '../../components/About/WWeDoT';

function CarTint() {

  const [user, token] = useAuth();
  const [CarTint, setCarTint] = useState([]);

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
    {CarTint &&
        CarTint.map((CarTint) => (
          <p key={CarTint.id}>
            {CarTint.username} {CarTint.email}
          </p>
        ))}
  </div>
  )
}

export default CarTint