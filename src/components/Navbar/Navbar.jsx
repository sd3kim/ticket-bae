import React from "react";

import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="nav-wrapper">
        <div>
          <Link to="/">TicketBae</Link>
        </div>
        <div className="nav">
          <div>
            <Link to="/">Log In</Link>
          </div>
          <div>
            <Link to="/">Sign Up</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
