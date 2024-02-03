import React from "react";
import Home from "./Home/Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import StepOne, { StepAcronym } from "./StepOne/screens/StepAcronym";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/stepacronym" element={<StepAcronym/>} />
      </Routes>
    </Router>
  );
}

export default App;
