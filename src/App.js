import React from "react";
import Home from "./Home/Home";
import About from "./Home/About/About";
import How from "./Home/How/How";
import Login from "./Home/Login/Login";
import SignUp from "./Home/SignUp/SignUp";
import Profile from "./Home/Profile/Profile";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Prompt } from "./StepTwo/AnimaPackage-React-FS6nC/src/screens/Step/Step";
import { Step3 } from "./Step3/Step3";
import { StepAcronym } from "./StepOne/screens/StepAcronym";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/howitworks" element={<How/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/choose" element={<StepAcronym/>} />
        <Route path="/prompt" element={<Prompt/>} />
        <Route path="/results" element={<Step3/>} />
      </Routes>
    </Router>
  );
}

export default App;
