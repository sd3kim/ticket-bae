import React, { useState } from "react";
import AllEvents from "../../components/AllEvents/AllEvents";
import SearchFeature from "./SearchFeature";

export default function HomePage() {
  return (
    <div>
      <h1>TicketBae</h1>
      <SearchFeature />
    </div>
  );
}
