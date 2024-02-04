import React from "react";
import NavBar from "../NavBar/NavBar";
import "../Home.css";
import "../About/About.css";
import "./How.css";

function How() {
    return (
        <div className="homepage">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="frame" style = {{ backgroundColor: "#7267ba"}}>
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
                            <div className="about-h1">How It Works</div>
                            <div className="about-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
                            <button className="button2">View Github Repo</button>
                            <div></div>
                            <div className="about-h1">Common Mnemonics</div>
                            <div className="container-table">
                                <div className="table-column">
                                    <div className="table-header">Topic</div>
                                    <div className="table-entries">
                                        <div className="table-text">Planets</div>
                                        <div className="table-text">Poison Ivy</div>
                                        <div className="table-text">The Great Lakes</div>
                                        <div className="table-text">British Nobility Rank</div>
                                        <div className="table-text">Trigonometry</div>
                                        <div className="table-text">Units of Measurement</div>
                                    </div>
                                </div>
                                <div className="table-column">
                                    <div className="table-header">Mnemonic</div>
                                    <div className="table-entries">
                                        <div className="table-text"><span className="purple-text">M</span>y <span className="purple-text">V</span>ery <span className="purple-text">E</span>xcellent <span className="purple-text">M</span>other <span className="purple-text">J</span>ust <span className="purple-text">S</span>erved <span className="purple-text">U</span>s <span className="purple-text">N</span>achos</div>
                                        <div className="table-text">Leaves of <span className="purple-text">three</span>, leave it be</div>
                                        <div className="table-text"><span className="purple-text">H</span>uron <span className="purple-text">O</span>ntario <span className="purple-text">M</span>ichigan <span className="purple-text">E</span>rie <span className="purple-text">S</span>uperior</div>
                                        <div className="table-text"><span className="purple-text">D</span>o <span className="purple-text">M</span>en <span className="purple-text">E</span>ver <span className="purple-text">V</span>isit <span className="purple-text">B</span>oston?</div>
                                        <div className="table-text"><span className="purple-text">SOH CAH TOA</span></div>
                                        <div className="table-text"><span className="purple-text">K</span>ing <span className="purple-text">H</span>enry <span className="purple-text">D</span>ied <span className="purple-text">B</span>y <span className="purple-text">D</span>rinking <span className="purple-text">C</span>hocolate <span className="purple-text">M</span>ilk</div>
                                    </div>
                                </div>
                            </div>
                            <button className="button2">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default How;