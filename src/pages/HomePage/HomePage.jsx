import React from "react";
import SearchFeature from "./SearchFeature";

export default function HomePage() {
  // const [] = useState({
  //   id: props.event._id,
  //   artist: props.event.artist,
  //   location: props.event.location,
  //   startDate: props.event.startDate,
  //   endDate: props.event.endDate,
  // });

  return (
    <div>
      <h1>TicketBae</h1>
      <SearchFeature />
    </div>
  );
}
