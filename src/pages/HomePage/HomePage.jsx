import React, { useState } from "react";
// import AllEvents from "../../components/AllEvents/AllEvents";
import SearchPage from "../SearchPage/SearchPage";
import "../HomePage/HomePage.css";

export default function HomePage() {
  return (
    <div className="container">
      <h1>🎟️ TicketBae 🎟️</h1>
      <SearchPage />
    </div>
  );
}
