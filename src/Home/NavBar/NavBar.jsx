import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-overlap">
        <div className="nav-rectangle" />
        <div className="nav-container">
          <div className="nav-text">
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
            <Link to="/signup">
              <button className="button3">Sign Up</button>
            </Link>            
            <img className="profile" alt="profile icon" src="user.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;