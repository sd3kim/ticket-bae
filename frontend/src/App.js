import "./App.css";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<h4>Login</h4>} />
        <Route path="/signup" element={<h4>Sign Up</h4>} />
      </Routes>
      <Link to="/events">View all events</Link>
      {/* <h1>TicketBae</h1>
      <div className="searchbar">
        <form>
          <label>
            <input
              type="text"
              name="artist"
              placeholder="ARTIST"
              // value={data.name}
            ></input>
          </label>
          <label>
            <input
              type="text"
              name="Location"
              placeholder="LOCATION"
              // value={event.userName}
            ></input>
          </label>
          <select value="date" onChange={() => "hello"}>
            <option value="empty" placeholder="Date"></option>
            <option value="jan-march">JAN-MARCH</option>
            <option value="apr-june">APRIL-JUNE</option>
            <option value="july-sept">JULY-SEPT</option>
            <option value="oct-dec">OCT-DEC</option>
          </select>
          <input type="submit" value="Search" onChange={() => "hello"} />
        </form>
      </div> */}
    </div>
  );
}

export default App;
