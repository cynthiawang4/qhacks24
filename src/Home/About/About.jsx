import React from "react";
import NavBar from "../NavBar/NavBar";
import "../Home.css";
import "./About.css";

function About() {
    return (
        <div className="homepage">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="frame" style = {{ backgroundColor: "#7267ba" }}>
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
                    <div className="container-about">
                        <div className="about-text">
                            <div className="about-h1">About Us</div>
                            <div className="about-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                        </div>
                        <div className="container-person">
                            <div className="person">
                                <div className="photo" />
                                <div className="photo-text">
                                    <div className="about-h3">Name</div>
                                    <div className="about-h4">Name</div>
                                </div>
                            </div>
                            <div className="person">
                                <div className="photo" />
                                <div className="photo-text">
                                    <div className="about-h3">Name</div>
                                    <div className="about-h4">Name</div>
                                </div>
                            </div>
                            <div className="person">
                                <div className="photo" />
                                <div className="photo-text">
                                    <div className="about-h3">Name</div>
                                    <div className="about-h4">Name</div>
                                </div>
                            </div>
                            <div className="person">
                                <div className="photo" />
                                <div className="photo-text">
                                    <div className="about-h3">Name</div>
                                    <div className="about-h4">Name</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;