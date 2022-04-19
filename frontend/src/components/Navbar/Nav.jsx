import React from "react";

import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav className="nav-wrapper">
        <div>
          <Link to="/">TicketBae</Link>
        </div>
        <div className="nav">
          <div>
            <Link to="/login">Profile</Link>
          </div>
          <div>
            <Link to="/signup">LogOut</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
