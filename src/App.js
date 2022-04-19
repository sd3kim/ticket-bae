<<<<<<< HEAD
import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
// import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AllEvents from "./components/AllEvents/AllEvents";
import Nav from "./components/Navbar/Nav";
import SearchFeature from "./pages/HomePage/SearchFeature";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<h4>Login</h4>} />
        <Route path="/signup" element={<h4>Sign Up</h4>} />
        <Route path="/allEvents" element={<AllEvents />} />
        {/* <Route path="/" element={<SearchFeature />} /> */}
      </Routes>
    </div>
  );
=======
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SignUpForm from "./components/components/LoginForm/LoginForm";
import AuthPage from "./pages/AuthPage";
import UserLogOut from "./components/components/UserLogOut/UserLogOut";
import AllEvents from "./components/AllEvents/AllEvents";
import HomePage from "./pages/HomePage/HomePage";
import Nav from "./components/Navbar/Nav";
class App extends React.Component {
  state = {
    user: null,
  };
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };
  componentDidMount = () => {
    let token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        token = null;
      } else {
        let userDoc = payload.user;
        this.setState({ user: userDoc });
      }
    }
  };
  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <div>
            <div className="log">
              <Nav />
              <UserLogOut
                setUserInState={this.setUserInState}
                user={this.state.user}
              />
            </div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/allEvents" element={<AllEvents />} />
            </Routes>
            <HomePage />
          </div>
        ) : (
          <AuthPage setUserInState={this.setUserInState} />
        )}
      </div>
    );
  }
>>>>>>> 0d67c9867250fd4a0712dc8884d9df2c2dab109a
}

export default App;
