import React from "react";

class UserLogOut extends React.Component {
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.setUserInState(null);
  };
  // userName = localStorage.setItem("userName", this.props.user.name);
  // userEmail = localStorage.setItem("userEmail", this.props.user.email);
  render() {
    return (
      <div className="UserLogOut">
        <h2>Name: {this.props.user.name}</h2>
        <h2>Email: {this.props.user.email}</h2>
        <button className="btn-sm" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    );
  }
}

export default UserLogOut;
