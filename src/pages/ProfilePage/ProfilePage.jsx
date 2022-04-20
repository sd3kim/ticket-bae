import React from "react";

export default function ProfilePage(props) {
  console.log("this is user name", localStorage.getItem("userName"));
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  return (
    <div>
      <h1>ProfilePage</h1>
      <br />
      <br />
      <img src="https://media.istockphoto.com/vectors/man-vector-icon-for-graphic-design-logo-web-site-social-media-mobile-vector-id1136995165?k=20&m=1136995165&s=612x612&w=0&h=PvnCZhxSnruLgMJm9r4SlFYa_NWHNXuWZJ1oQ5L_bh8="></img>
      <h3>Name: {userName}</h3>
      <h3>Email: {userEmail}</h3>
    </div>
  );
}
