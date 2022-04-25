import React from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import UserLogOut from "../UserLogOut/UserLogOut";
import "./Nav.css";

function Nav() {
  let navigate = useNavigate();
  let clearPage = () => {
    navigate("/");
    window.location.reload(true);
  };
  return (
    <div>
      <nav className="nav-wrapper">
        <div>
          <button className="button" onClick={clearPage}>
            🎟️ TicketBae 🎟️
          </button>
        </div>
        <div className="nav">
          <div className="tag">
            <Link to="/profile">🎟️ Profile 🎟️</Link>
          </div>
          <div className="tag">
            <Link to="/savedShows">🎟️ Saved Show List🎟️</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
