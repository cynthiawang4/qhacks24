import React from "react";
import Home from "./Home/Home";
import About from "./Home/About/About";
import How from "./Home/How/How";
import Login from "./Home/Login/Login";
import SignUp from "./Home/SignUp/SignUp";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/howitworks" element={<How/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
