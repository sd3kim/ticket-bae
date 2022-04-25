import React from "react";
import UserLogOut from "../../components/UserLogOut/UserLogOut";

export default function ProfilePage(props) {
  return (
    <div>
      <h1>Profile Page</h1>
      <br />
      <br />
      <img src="https://i.imgur.com/cvqEXnb.png"></img>
      <UserLogOut setUserInState={props.setUserInState} user={props.user} />
    </div>
  );
}
