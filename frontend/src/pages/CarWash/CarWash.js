import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

function CarWash() {
  const [user, token] = useAuth();
  const [carwash, setCarWash] = useState([]);

  let filtered;
  
  useEffect(() => {
    fetchCarWash();
  }, [token]);

  const fetchCarWash = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setCars(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>CarWash
      {/* {cars &&
          cars.map((car) => (
            <p key={car.id}>
              {car.year} {car.model} {car.make}
            </p>
          ))} */}
    </div>
  )
}

export default CarWash