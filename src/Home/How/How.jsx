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
                            <div className="about-h2">Memotrix serves as an education and study helper tool that leverages ChatGPT to generate mnemonics. It focuses on creating memorable and effective mnemonics, such as acronyms or phrases, to aid users in remembering specific content from textbooks, articles, or other reading materials. The tool aims to simplify the process of memorization and enhance the overall studying experience for students. </div>
                            <div className="about-h2">Select the type of mnenomic device, enter a prompt, and see what Memotrix generates! </div>
                            <a href="https://github.com/cynthiawang4/qhacks24" target="_blank"><button className="button2">View Github Repo</button></a>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default How;