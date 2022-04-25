import React from "react";

import { Link, useNavigate, Routes, Route } from "react-router-dom";
import UserLogOut from "../UserLogOut/UserLogOut";

function Nav() {
  return (
    <>
      <nav className="nav-wrapper">
        <div>
          <Link to="/">TicketBae</Link>
          {/* 
          <Routes>
            <Route
              path="/"
              element={<button onClick={clearPage}>TicketBae</button>}
            />
          </Routes> */}
        </div>
        <div className="nav">
          <div>
            <Link to="/profile">Profile</Link>
          </div>
          <div>
            <Link to="/savedShows">Saved Shows</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
