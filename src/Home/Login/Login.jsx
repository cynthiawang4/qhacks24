import React from "react";
import { Link } from "react-router-dom";
import "../Home.css"
import "./Login.css";

function Login() {
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
                    <div className="login-container">
                        <div className="login-text">
                            <img className="logo" alt="logo" src="logo.png" />
                            <div className="h4">App name</div>
                        </div>
                        <form className="login-field">
                            <label className="h5">Enter your email:</label>
                            <input className="input-box" type="email" name="email"></input>
                            <label className="h5">Enter your password:</label>
                            <input className="input-box" type="text" name="password"></input>
                        </form>
                        <div className="login-button">
                            <button className="button1">Sign In</button>
                            <button className="button2">Sign Up</button>
                        </div>
                    </div>
                    <div className="homepage-button">
                        <Link to="/">
                            <button className="button3">Back to homepage</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;