import React from "react";

import { Link } from "react-router-dom";
import UserLogOut from "../UserLogOut/UserLogOut";

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
            {/* <Link to="/signup">LogOut</Link> */}
            {/* <UserLogOut
              setUserInState={this.setUserInState}
              user={this.state.user}
            /> */}
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
