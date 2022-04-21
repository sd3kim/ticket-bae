import React from "react";

export default function SavedShowsPage(props) {
  let savedShows = [];
  savedShows.push(localStorage.getItem("saved"));
  return (
    <div>
      SavedShowsPage
      <br />
      <br />
      <div>{savedShows}</div>
      <div>July 15 2022: Backstreet Boys @ Molson Ampitheatre</div>
    </div>
  );
}
