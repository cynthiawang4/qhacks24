import React from "react";
import NavBar from "../NavBar/NavBar";
import "../Home.css";
import "../About/About.css";
import "./Profile.css";

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
                        <div className="photo" />
                        <div className="about-h1">We Love Erin Meger</div>
                        <div className="container-person">
                            <button className="button3">Start New Chat</button>
                            <button className="button3">Create New Folder</button>
                        </div>
                        <div className="project-label">Your Projects</div>
                        <div className="container-person">
                            <div className="project">
                                <div className="photo-text">
                                    <div className="project-heading">Science</div>
                                    <div className="projecct-text">32 chats saved</div>
                                </div>
                            </div>
                            <div className="project">
                                <div className="photo-text">
                                    <div className="project-heading">History</div>
                                    <div className="project-text">16 chats saved</div>
                                </div>
                            </div>
                            <div className="project">
                                <div className="photo-text">
                                    <div className="project-heading">Math</div>
                                    <div className="project-text">47 chats saved</div>
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