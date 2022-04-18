import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav-wrapper">
        <div>Home</div>
        <div className="nav">
          <div>Login</div>
          <div>Signup</div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
