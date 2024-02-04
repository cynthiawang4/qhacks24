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
                            <div className="about-h2">We are a group of second year Computing Students at Queen's University. We made Memotrix for QHacks 2024 and are incredibly proud of our result! With most of us new to full-stack development and all of us new to AI, we are impressed with how much we managed to learn within 36 hours. </div>
                        </div>
                        <div className="container-person">
                            <div className="person">
                                <div className="photo" />
                                <div className="photo-text">
                                    <div className="about-h3">Savannah Han</div>
                                    <div className="about-h4">Design & Front-End</div>
                                </div>
                            </div>
                            <div className="person">
                                <div className="photo" />
                                <div className="photo-text">
                                    <div className="about-h3">Kristen Lee</div>
                                    <div className="about-h4">AI & Back-End</div>
                                </div>
                            </div>
                            <div className="person">
                                <div className="photo" />
                                <div className="photo-text">
                                    <div className="about-h3">Amanda Li</div>
                                    <div className="about-h4">Design & Front-End</div>
                                </div>
                            </div>
                            <div className="person">
                                <div className="photo" />
                                <div className="photo-text">
                                    <div className="about-h3">Cynthia Wang</div>
                                    <div className="about-h4">Back-End & Front-End</div>
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