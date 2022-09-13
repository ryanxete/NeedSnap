import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import "./RegisterPage.css";


const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    is_provider: false,
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

// console.log(formData.is_provider)
// console.log(service)

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        <label htmlFor="">
          Provider?
          <input type="checkbox" name="is_provider" checked={formData.is_provider} onChange={handleInputChange}/>
        </label>
        {/* <label>
          Choose your Preferred Service:<br/>
          <select onChange={(event) => setService(event.target.value)} name="" id="" value={formData.service}>
            <option value="1">Cleaning</option>
            <option value="2">Plumbing </option>
            <option value="Null">Decide Later</option>
          </select>
        </label> */}
        <p style={{ fontSize: "12px" }}>
          NOTE: If you are a Provider, after logging in, Go to the Providers Hub and add your Address + specify the Service that you provide. thank you
        </p>
        <button className="register">Register!</button>
      </form>
    </div>
  );
};

export default RegisterPage;
