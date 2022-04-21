import React from "react";

export default function SavedShowsPage(props) {
  let savedShows = [];
  savedShows.push(localStorage.getItem("saved"));
  return (
    <div>
      SavedShowsPage
      <br />
      <br />
      {/* {savedShows && savedShows.map((show) => <li value={show}>{show}</li>)} */}
      {/* <input type="text" value={localStorage.getItem("saved")}></input> */}
      <div>{savedShows}</div>
      <div>July 15 2022: Backstreet Boys @ Molson Ampitheatre</div>
    </div>
  );
}
