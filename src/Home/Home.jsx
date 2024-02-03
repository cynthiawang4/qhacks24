import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import "./Home.css";

function Home() {
  return (
    <div className="homepage">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="frame">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="div" />
              <div className="ellipse-2" />
              <div className="ellipse-3" />
              <div className="ellipse-4" />
              <div className="ellipse-5" />
              <div className="ellipse-6" />
              <div className="ellipse-7" />
            </div>
          </div>
          <NavBar/>
          <div className="container">
            <div className="container-text">
              <div className="h1">App name</div>
              <div className="h2">Slogan or smt</div>
            </div>
            <div className="container-button">
              <Link to="/signup">
                <button className="button1">Get Started</button>
              </Link>
              <Link to="/login">
                <button className="button2">Already have an account</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;