import React from "react";
import Nav from "../../components/Navbar/Nav";
import { Routes, Route, useNavigate } from "react-router-dom";
export default class SavedShowsPage extends React.Component {
  state = {
    showHistory: [],
  };

  async componentDidMount() {
    try {
      let jwt = localStorage.getItem("token");
      let fetchOrdersResponse = await fetch("/api/savedShows/", {
        headers: { Authorization: "Bearer " + jwt },
      });

      if (!fetchOrdersResponse.ok) throw new Error("Couldn't fetch shows");
      let shows = await fetchOrdersResponse.json();
      this.state.showHistory.push(shows);
      this.setState({ showHistory: shows });
      console.log("shows", this.state.showHistory);
    } catch (err) {
      console.error("ERROR:", err);
    }
  }
  render() {
    return (
      <div>
        <Nav />
        These are your saved shows:
        <br />
        <br />
        <div>
          {this.state.showHistory.map((events) =>
            events.savedItem.map((e) => <li>{e.name}</li>)
          )}
        </div>
      </div>
    );
  }
}
