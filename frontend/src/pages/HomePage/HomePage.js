import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import AboutUs from "../../components/About/AboutUs";
import axios from "axios";
import "./HomePage.css";
import Service from "../../components/Service/Service";
import PrivateRoute from "../../utils/PrivateRoute";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
 
  return (
    <div className="container">
      <h1 className="welcome">Welcome {user.username}!</h1>
      <AboutUs />
      <Service />
    </div>
  );
};

export default HomePage;
