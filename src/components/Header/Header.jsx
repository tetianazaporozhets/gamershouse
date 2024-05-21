import React from "react";
import { NavLink } from "react-router-dom";
import PixlIcon from "../../assets/icons/pixl.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={PixlIcon} alt="" />
      <div>Search</div>
      <div className="user-panel">
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/signup">Sign up</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
