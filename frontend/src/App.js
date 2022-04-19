import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AllEvents from "./components/AllEvents/AllEvents";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<h4>Login</h4>} />
        <Route path="/signup" element={<h4>Sign Up</h4>} />
        <Route path="/allEvents" element={<AllEvents />} />
      </Routes>
    </div>
  );
}

export default App;
