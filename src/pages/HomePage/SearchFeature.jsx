import React from "react";
import { Routes, Route } from "react-router-dom";

class SearchFeature extends React.Component {
  allEvents = [];
  state = {
    name: "",
    date: "",
    location: "",
    event: "",
    savedItem: [],
  };

  handleSearch = async (e) => {
    e.preventDefault();
    if (
      this.state.name.length === 0 &&
      this.state.date.length !== 0 &&
      this.state.location.length !== 0
    ) {
      this.allEvents = [];
      console.log(this.state.date);
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=efomLcpWJQWbkN9TXlGgmOc98CZzZgkh&locale=*&startDateTime=${this.state.date}:00Z&size=150&city=${this.state.location}&countryCode=CA&segmentId=KZFzniwnSyZfZ7v7nJ`
      );
      const showEvents = await response.json();
      const eventName = showEvents._embedded.events;
      const eventDateMapped = eventName.map((el) => el.dates);
      const eventDate = eventDateMapped.map((el) => el.start.dateTime);
      const eventNameMapped = eventName.map((el) => el.name);
      const locationMapped = eventName.map((el) => el._embedded);
      const eventLocationVenue = locationMapped.map((el) => el.venues);
      const eventLocationCity = locationMapped.map((el) => el.city);
      console.log("all events", eventNameMapped);
      for (let i = 0; i < eventNameMapped.length; i++) {
        if (eventDate[i] === this.state.date) {
          this.allEvents = [];
          console.log("matched events", eventDate, eventNameMapped);
          this.allEvents.push(
            " " +
              eventNameMapped[i] +
              " " +
              eventDate[i] +
              " " +
              " " +
              " " +
              " " +
              this.state.location
          );
        } else {
          this.allEvents = [];
          this.setState({
            event: `There are no upcoming events for ${this.state.name} in ${this.state.location}`,
          });
          console.log("no matched", eventDate[i]);
        }
      }
    } else if (
      this.state.name.length !== 0 &&
      this.state.date.length === 0 &&
      this.state.location.length !== 0
    ) {
      this.allEvents = [];
      console.log("event and no date nad location");
      this.setState({
        event: `${this.state.name} has no upcoming shows in ${this.state.location}`,
      });
      const response = await fetch(
        `
        https://app.ticketmaster.com/discovery/v2/events?apikey=efomLcpWJQWbkN9TXlGgmOc98CZzZgkh&keyword=${this.state.name}&locale=*&size=150&city=${this.state.location}&countryCode=CA&segmentId=KZFzniwnSyZfZ7v7nJ`
      );
      const showEvents = await response.json();
      if ("_embedded" in showEvents) {
        this.allEvents = [];
        console.log("oh no");
        const eventName = showEvents._embedded.events;
        const eventDateMapped = eventName.map((el) => el.dates);
        const eventDate = eventDateMapped.map((el) => el.start.dateTime);
        const eventNameMapped = eventName.map((el) => el.name);
        if ("_embedded" in eventName) {
          this.allEvents = [];
          const locationMapped = eventName.map((el) => el._embedded);
          const eventLocationVenue = locationMapped.map((el) => el.venues);
          const eventLocationCity = locationMapped.map((el) => el.city);
          for (let i = 0; i < eventNameMapped.length; i++) {
            if (eventNameMapped[i] === this.state.name) {
              this.allEvents = [];
              console.log("matched events name", eventDate, eventNameMapped);
              this.allEvents.push(
                " " +
                  eventNameMapped[i] +
                  " " +
                  eventDate[i] +
                  " " +
                  " " +
                  " " +
                  " " +
                  this.state.location
              );
              this.allEvents = [];
              this.setState({
                event: `There are the upcoming events for ${this.state.name}`,
              });
            } else {
              this.allEvents = [];
              this.setState({
                event: `${this.state.name} has no upcoming shows in ${this.state.location}`,
              });
              console.log("no matched", eventDate[i]);
            }
          }
        }
      } else {
        this.allEvents = [];
        this.setState({
          event: `${this.state.name} has no upcoming shows in ${this.state.location}`,
        });
      }
    } else if (
      this.state.name.length !== 0 &&
      this.state.date.length !== 0 &&
      this.state.location.length !== 0
    ) {
      console.log("i am at right place");
      this.allEvents = [];
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=efomLcpWJQWbkN9TXlGgmOc98CZzZgkh&keyword=${this.state.name}&locale=*&startDateTime=${this.state.date}:00Z&size=150&city=${this.state.location}&countryCode=CA&segmentId=KZFzniwnSyZfZ7v7nJ`
      );
      const showEvents = await response.json();
      const eventName = showEvents._embedded.events;
      const eventDateMapped = eventName.map((el) => el.dates);
      const eventDate = eventDateMapped.map((el) => el.start.dateTime);
      const eventNameMapped = eventName.map((el) => el.name);
      const locationMapped = eventName.map((el) => el._embedded);
      const eventLocationVenue = locationMapped.map((el) => el.venues);
      const eventLocationCity = locationMapped.map((el) => el.city);
      for (let i = 0; i < eventNameMapped.length; i++) {
        if (
          eventNameMapped[i] === this.state.name ||
          eventDate[i] === this.state.date
        ) {
          this.allEvents = [];
          console.log(
            "matched events name and date",
            eventDate,
            eventNameMapped
          );
          this.allEvents.push(
            " " +
              eventNameMapped[i] +
              " " +
              eventDate[i] +
              " " +
              " " +
              " " +
              " " +
              this.state.location
          );
          this.setState({
            event: `These are the upcoming events in ${this.state.location} on ${this.state.date}`,
          });
        } else {
          this.allEvents = [];
          this.setState({
            event: `There are no upcoming events on ${this.state.date} in ${this.state.location}`,
          });
          console.log("no matched", eventNameMapped[i], eventDate[i]);
        }
      }
    } else if (this.state.name.length === 0 && this.state.date.length === 0) {
      this.allEvents = [];
      console.log("no event and no date just location");
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=efomLcpWJQWbkN9TXlGgmOc98CZzZgkh&locale=*&size=150&city=${this.state.location}&countryCode=CA&segmentId=KZFzniwnSyZfZ7v7nJ`
      );
      const showEvents = await response.json();
      if ("_embedded" in showEvents) {
        this.allEvents = [];
        const eventName = showEvents._embedded.events;
        console.log("oh no");
        const eventDateMapped = eventName.map((el) => el.dates);
        const eventDate = eventDateMapped.map((el) => el.start.dateTime);
        const eventNameMapped = eventName.map((el) => el.name);
        const locationMapped = eventName.map((el) => el._embedded);
        const eventLocationVenue = locationMapped.map((el) => el.venues);
        const eventLocationCity = locationMapped.map((el) => el.city);
        console.log("i am good all events", locationMapped);
        console.log("i am good all events", eventLocationCity.name);
        console.log("i am good all events", eventLocationVenue);
        console.log("i am good all events", eventLocationCity.name);
        for (let i = 0; i < eventNameMapped.length; i++) {
          this.allEvents.push(
            " " +
              eventNameMapped[i] +
              " " +
              eventDate[i] +
              " " +
              " " +
              " " +
              " " +
              this.state.location
          );

          console.log("All events in searched city: ", this.allEvents);
          this.setState({
            event: `These are all the upcoming events in ${this.state.location}`,
          });
          console.log(this.state.event);
        }
      } else {
        this.allEvents = [];
        this.setState({
          event: `These are upcoming events in ${this.state.location}`,
        });
      }
    }
  };

  handleChange = (e) => {
    if (e.target.name || e.target.date === "" || e.target.location === "")
      this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleAdd = async (incoming_item) => {
    this.setState({
      savedItem: [
        ...this.state.savedItem,
        { name: incoming_item.target.value },
      ],
    });
  };
  handleSave = async (evt) => {
    try {
      let jwt = localStorage.getItem("token");
      console.log(jwt);
      let fetchResponse = await fetch("/api/savedShows/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
        body: JSON.stringify({
          savedItem: this.state.savedItem,
        }),
      });
      let serverResponse = await fetchResponse.json();
      console.log("this is fetchResponse", fetchResponse);
      console.log("Success:", serverResponse);
      this.setState({ savedItem: [] });
      console.log("this is saveditem", this.state.savedItem);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  render() {
    return (
      <div>
        <div className="searchbar">
          <form onSubmit={this.handleSearch}>
            <label>
              <input
                type="text"
                name="name"
                placeholder="Artist"
                value={this.state.name}
                onChange={this.handleChange}
              ></input>
            </label>
            <label>
              <input
                type="text"
                value={this.state.location}
                name="location"
                placeholder="Location"
                onChange={this.handleChange}
              ></input>
            </label>
            <label>
              <input
                type="datetime-local"
                id="meeting-time"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              ></input>
            </label>
            <Routes>
              <Route
                path="/"
                element={
                  <button type="submit" onClick={this.handleSearch}>
                    Search
                  </button>
                }
              />
            </Routes>
          </form>
        </div>
        <div>
          <h4>{this.state.event}</h4>
          {this.allEvents &&
            this.allEvents.map((event) => (
              <table>
                <tr>
                  <th>Event:</th>
                </tr>
                <tr>
                  <td>
                    {event}{" "}
                    <button onClick={this.handleAdd} value={event}>
                      Add Event
                    </button>
                  </td>
                </tr>
              </table>
            ))}
          <button onClick={this.handleSave}>Submit</button>
        </div>
      </div>
    );
  }
}

export default SearchFeature;
