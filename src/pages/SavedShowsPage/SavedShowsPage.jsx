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
      let fetchOrdersResponse = await fetch("/api/savedShows/", {
        headers: { Authorization: "Bearer " + jwt },
      });
      //   console.log(fetchOrdersResponse);
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
        SavedShowsPage
        <br />
        <br />
        {/* {savedShows && savedShows.map((show) => <li value={show}>{show}</li>)} */}
        {/* <input type="text" value={localStorage.getItem("saved")}></input> */}
        {/* <div>{savedShows}</div> */}
        <div>
          {/* {this.state.showHistory &&
            this.state.showHistory.map(
              (e) => (
                  e.savedItem.map((ev) => {
                <li>{e.savedItem.name}</li>
              )
              // console.log(e)
                )
                  )} */}
          {this.state.showHistory.map((events) =>
            events.savedItem.map((e) => <li>{e.name}</li>)
          )}
        </div>
        <div>July 15 2022: Backstreet Boys @ Molson Ampitheatre</div>
      </div>
    );
  }

  // export default function SavedShowsPage(props) {
  //   let savedShows = [];
  //   savedShows.push(localStorage.getItem("saved"));

  //   return (
  //     <div>
  //       SavedShowsPage
  //       <br />
  //       <br />
  //       <div>{savedShows}</div>
  //     </div>
  //   );
}
