import React from "react";
import UserLogOut from "../../components/UserLogOut/UserLogOut";

export default function ProfilePage(props) {
  return (
    <div>
      <h1>Profile Page</h1>
      <br />
      <br />
      <img src="https://media.istockphoto.com/vectors/man-vector-icon-for-graphic-design-logo-web-site-social-media-mobile-vector-id1136995165?k=20&m=1136995165&s=612x612&w=0&h=PvnCZhxSnruLgMJm9r4SlFYa_NWHNXuWZJ1oQ5L_bh8="></img>
      <UserLogOut setUserInState={props.setUserInState} user={props.user} />
    </div>
  );
}
