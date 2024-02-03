import React from "react";
import Home from "./Home/Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Prompt } from "./StepTwo/AnimaPackage-React-FS6nC/src/screens/Step/Step";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/prompt" element={<Prompt/>} />
      </Routes>
    </Router>
  );
}

export default App;
