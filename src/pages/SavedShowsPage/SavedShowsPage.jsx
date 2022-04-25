import React from "react";

export default class SavedShowsPage extends React.Component {
  state = {
    showHistory: [],
    qty: [],
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
        These are your saved shows:
        <br />
        <br />
        <div>
          {this.state.showHistory.map((events) =>
            events.savedItem.map((e) => (
              <li>
                {e.name}
                <button onClick={this.handleUpdate}>-</button>
                {e.qty}
                <button>+</button>
              </li>
            ))
          )}
        </div>
      </div>
    );
  }
}
