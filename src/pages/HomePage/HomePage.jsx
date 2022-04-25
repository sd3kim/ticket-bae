import React, { useState } from "react";
// import AllEvents from "../../components/AllEvents/AllEvents";
import SearchFeature from "./SearchFeature";
import "../HomePage/HomePage.css";

export default function HomePage() {
  return (
    <div className="container">
      <h1>TicketBae</h1>
      <SearchFeature />
    </div>
  );
}
