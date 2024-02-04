import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import LoginButton from "./LoginButton";
import Mascot from "../Mascot.png";
import Logo from "../Logo.png"

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-overlap">
        <div className="nav-rectangle" />
        <div className="nav-container">
          <div className="nav-text">
            <img className="nav-logo" alt="logo" src={Logo} />
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="h3">Home</div>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <div className="h3">About</div>
            </Link>
            <Link to="/howitworks" style={{ textDecoration: 'none' }}>
              <div className="h3">How It Works</div>
            </Link>
          </div>
          <div className="nav-button">
            <LoginButton className="button3" text="Sign Up" />
            <Link to="/profile" style={{ textDecoration: 'none' }}>
              <img className="profile" alt="profile icon" src={Mascot} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;