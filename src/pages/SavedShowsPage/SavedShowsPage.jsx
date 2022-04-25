import React from "react";

export default class SavedShowsPage extends React.Component {
  state = {
    showHistory: [],
    qty: [],
  };

  async componentDidMount() {
    try {
      let jwt = localStorage.getItem("token");
      let fetchResponse = await fetch("/api/savedShows/", {
        headers: { Authorization: "Bearer " + jwt },
      });

      if (!fetchResponse.ok) throw new Error("Couldn't fetch shows");
      let shows = await fetchResponse.json();
      this.state.showHistory.push(shows);
      this.setState({ showHistory: shows });
      console.log("shows", this.state.showHistory);
    } catch (err) {
      console.error("ERROR:", err);
    }
  }
  handleUpdate = async () => {
    try {
      let jwt = localStorage.getItem("token");
      let fetchResponse = await fetch("/api/savedShows/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
      });
      console.log("this is fetch response", fetchResponse);
      if (!fetchResponse.ok) throw new Error("Couldn't fetch shows");
      let shows = await fetchResponse.json();
      console.log("this is update", shows);
    } catch (err) {
      console.error("ERROR:", err);
    }
  };
  render() {
    let qty;
    console.log(this.state.qty);
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
                <button>+</button>
                {(qty = e.qty)}
                <button onClick={this.handleUpdate}>-</button>
              </li>
            ))
          )}
        </div>
      </div>
    );
  }
}
