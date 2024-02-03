import React from "react";
import Home from "./Home/Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Prompt } from "./StepTwo/AnimaPackage-React-FS6nC/src/screens/Step/Step";
import { Step3 } from "./Step3/Step3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/prompt" element={<Prompt/>} />
        <Route path="/results" element={<Step3/>} />
      </Routes>
    </Router>
  );
}

export default App;
