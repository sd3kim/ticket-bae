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
    </div>
  );
}
