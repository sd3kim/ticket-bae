import React from "react";

export default class SavedShowsPage extends React.Component {
  state = {
    showHistory: [],
  };
  // savedShows = [];
  // savedShows.push(localStorage.getItem("saved"));

  async componentDidMount() {
    try {
      let jwt = localStorage.getItem("token");
      let fetchOrdersResponse = await fetch("/api/savedShows", {
        headers: { Authorization: "Bearer " + jwt },
      });
      if (!fetchOrdersResponse.ok) throw new Error("Couldn't fetch shows");
      let shows = await fetchOrdersResponse.json(); // <------- convert fetch response into a js object

      // put into sate
      this.setState({ showHistory: shows });
    } catch (err) {
      console.error("ERROR:", err); // <-- log if error
    }
  }
  render() {
    return (
      <div>
        SavedShowsPage
        <br />
        <br />
        {/* {savedShows && savedShows.map((show) => <li value={show}>{show}</li>)} */}
        {/* <input type="text" value={localStorage.getItem("saved")}></input> */}
        {/* <div>{savedShows}</div> */}
        <div>{this.state.showHistory}</div>
        <div>July 15 2022: Backstreet Boys @ Molson Ampitheatre</div>
      </div>
    );
  }
}
