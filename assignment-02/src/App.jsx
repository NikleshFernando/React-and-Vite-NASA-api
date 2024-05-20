import APOD from "./components/APOD";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import MAP from "./components/MAP";
import Hello from "./components/Hello";
import EIA from "./components/EIA";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/APOD" element={<APOD />} />
          <Route path="/EAI" element={<EIA />} />
          <Route path="/MAP" element={<MAP />} />
          <Route path="/SignIn" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserProfile" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
