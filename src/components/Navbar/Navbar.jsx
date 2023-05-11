import React from "react";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <div>
        <span>Meal Subscription Plans</span>
        <span>Menu</span>
      </div>

      <MenuIcon />
    </div>
  );
};

export default Navbar;
