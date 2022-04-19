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
          </div>
        ) : (
          <AuthPage setUserInState={this.setUserInState} />
        )}
      </div>
    );
  }
}

export default App;
