import React from "react";
import UserLogOut from "../../components/UserLogOut/UserLogOut";

export default function ProfilePage(props) {
  return (
    <div>
      <h1>Profile Page</h1>
      <br />
      <br />
      <img src="https://cdn-icons.flaticon.com/png/512/2829/premium/2829075.png?token=exp=1650859621~hmac=521663f9b2513c3ce4401efb58507687"></img>
      <UserLogOut setUserInState={props.setUserInState} user={props.user} />
    </div>
  );
}
