import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul className="una">
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>NeedSnap for your Needs</b>
          </Link>
        </li>
        <li className="provider">
          <Link to={"/provider"} class="prov">Account</Link>
        </li>
        <li>
          {user ? (
            <button className="btnn" onClick={logoutUser}>Logout</button>
          ) : (
            <button className="btnn" onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
