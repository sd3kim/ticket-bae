import React, { useState, useEffect } from "react";

export default function SavedShowsPage(props) {
  const [hello, setHello] = useState("hello");

  useEffect(() => {
    // GET the shows for a user
  }, []);

  useEffect(() => {
    console.log("triggered", hello);
  }, [hello]);

  return (
    <div>
      SavedShowsPage
      <br />
      <br />
      <div>July 15 2022: Backstreet Boys @ Molson Ampitheatre</div>
      <button onClick={() => setHello((prevHello) => prevHello + "!")}>
        Click me hello
      </button>
    </div>
  );
}
