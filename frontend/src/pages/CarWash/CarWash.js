import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import WWeDoW from "../../components/About/WWeDoW";

function CarWash() {
  const [user, token] = useAuth();
  const [carwash, setCarWash] = useState([]);

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
      {carwash &&
          carwash.map((carwash) => (
            <p key={carwash.id}>
              {carwash.username} {carwash.email}
            </p>
          ))}
    </div>
  )
}

export default CarWash