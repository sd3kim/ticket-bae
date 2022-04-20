import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage/AuthPage";
import UserLogOut from "./components/UserLogOut/UserLogOut";
import AllEvents from "./components/AllEvents/AllEvents";
import HomePage from "./pages/HomePage/HomePage";
import Nav from "./components/Navbar/Nav";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SavedShowsPage from "./pages/SavedShowsPage/SavedShowsPage";

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

  findArtists = async () => {
    try {
      let getArtistList = await fetch("api/artists");
      let artists = await getArtistList.json();
    } catch (err) {
      console.log(err);
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
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/savedShows" element={<SavedShowsPage />} />
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
