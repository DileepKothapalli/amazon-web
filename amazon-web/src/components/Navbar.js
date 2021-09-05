import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/new.png";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchIcon from "@material-ui/icons/Search";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left__navbar">
        <div>
          <Link to="/">
            <img className="image" src={logo} alt="BigCo Inc. logo" />
          </Link>
        </div>
        <div className="location">
          <LocationOnOutlinedIcon />
        </div>
        <div className="delivery">
          <span>Hello</span>
          <span>Select Your Address</span>
        </div>
      </div>

      <div className="search__bar">
        <form className="search" action="">
          <input />
          <button>
            <SearchIcon />
          </button>
        </form>
      </div>

      <div className="right__navbar">
        <Link to="/Auth">
          <button>Account</button>
        </Link>
        <button>orders</button>
        <button>cart</button>
      </div>
    </div>
  );
};
export default Navbar;
