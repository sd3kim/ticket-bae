import React, { useState, useEffect } from "react";

export default function AllEvents() {
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       `https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*`
  //     );
  //     const users = await response.json();
  //     const user = users._embedded.events;
  //     console.log(user);
  //     setUser({ user: [user] });
  //     return () => {
  //       this.setUser({ user: user });
  //     };
  //   }
  //   fetchData();
  // }, []);
  // console.log(user);
  return <div>These are a list of the events</div>;
}
