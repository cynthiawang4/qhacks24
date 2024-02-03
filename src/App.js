import React from "react";
import Home from "./Home/Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Step3 } from "./Step3/Step3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/results" element={<Step3/>} />
      </Routes>
    </Router>
  );
}

export default App;
