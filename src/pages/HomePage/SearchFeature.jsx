import React from "react";
import { Routes, Route } from "react-router-dom";
import BaseSelect from "react-select";

class SearchFeature extends React.Component {
  allEvents = [];
  state = {
    name: "",
    date: "",
    location: "",
    event: "",
    eventDate: "",
  };
  // options = [
  //   { value: this.state.location, label: "Toronto" },
  //   { value: this.state.location, label: "Hamilton" },
  // ];
  // Select = (props) => (
  //   <FixRequiredSelect
  //     {...props}
  //     SelectComponent={BaseSelect}
  //     options={props.options || options}
  //   />
  // );

  handleSubmit = async (e) => {
    e.preventDefault();
    if (
      this.state.name.length === 0 &&
      this.state.date.length !== 0 &&
      this.state.location.length !== 0
    ) {
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
          // this.allEvents.push("no events on the date choosen");
          this.setState({
            event: "no matched event on selected artist and city",
          });
          console.log("no matched", eventDate[i]);
        }
      }
    } else if (
      this.state.name.length !== 0 &&
      this.state.date.length === 0 &&
      this.state.location.length !== 0
    ) {
      console.log("event and no date nad location");
      const response = await fetch(
        `
        https://app.ticketmaster.com/discovery/v2/events?apikey=efomLcpWJQWbkN9TXlGgmOc98CZzZgkh&keyword=${this.state.name}&locale=*&size=150&city=${this.state.location}&countryCode=CA&segmentId=KZFzniwnSyZfZ7v7nJ`
      );
      const showEvents = await response.json();
      if ("_embedded" in showEvents) {
        console.log("oh no");
        const eventName = showEvents._embedded.events;
        const eventDateMapped = eventName.map((el) => el.dates);
        const eventDate = eventDateMapped.map((el) => el.start.dateTime);
        const eventNameMapped = eventName.map((el) => el.name);
        if ("_embedded" in eventName) {
          const locationMapped = eventName.map((el) => el._embedded);
          const eventLocationVenue = locationMapped.map((el) => el.venues);
          const eventLocationCity = locationMapped.map((el) => el.city);
          for (let i = 0; i < eventNameMapped.length; i++) {
            if (eventNameMapped[i] === this.state.name) {
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
              this.setState({ event: "These are Matching Events" });
            } else {
              // this.allEvents.push("no events on the date choosen");
              this.setState({ event: "There is No Event with that name" });
              console.log("no matched", eventDate[i]);
            }
          }
        }
      } else {
        this.setState({ event: "This Artist is not Playing" });
      }
    } else if (
      this.state.name.length !== 0 &&
      this.state.date.length !== 0 &&
      this.state.location.length !== 0
    ) {
      console.log("i am at right place");
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
            event: "These are mathced events with city and date",
          });
        } else {
          // this.allEvents.push("no events on the date choosen");
          this.setState({ event: "no matched event on selected date" });
          console.log("no matched", eventNameMapped[i], eventDate[i]);
        }
      }
    } else if (
      this.state.name.length === 0 &&
      this.state.date.length === 0 &&
      this.state.location.length !== 0
    ) {
      console.log("no event and no date just location");
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=efomLcpWJQWbkN9TXlGgmOc98CZzZgkh&locale=*&size=150&city=${this.state.location}&countryCode=CA&segmentId=KZFzniwnSyZfZ7v7nJ`
      );
      const showEvents = await response.json();
      if ("_embedded" in showEvents) {
        // if('_embedded' in )
        const eventName = showEvents._embedded.events;
        console.log("oh no");
        const eventDateMapped = eventName.map((el) => el.dates);
        const eventDate = eventDateMapped.map((el) => el.start.dateTime);
        const eventNameMapped = eventName.map((el) => el.name);
        const locationMapped = eventName.map((el) => el._embedded);
        const eventLocationVenue = locationMapped.map((el) => el.venues);
        const eventLocationCity = locationMapped.map((el) => el.city);
        // const city = eventLocationCity.map((el) => el.name);
        console.log("i am good all events", locationMapped);
        console.log("i am good all events", eventLocationCity.name);
        console.log("i am good all events", eventLocationVenue);
        console.log("i am good all events", eventLocationCity.name);
        for (let i = 0; i < eventNameMapped.length; i++) {
          // if (this.state.location === eventLocationCity.name) {
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

          console.log("allevent of toronto", this.allEvents);
          this.setState({ event: "These are All Upcoming Events" });
          console.log(this.state.event);
          // } else {
          //   this.setState({ event: "These are no events on the selected city" });
          //   console.log("not available city");
          // }
        }
      } else {
        this.setState({ event: "no Events on selected city" });
      }
    }
    // console.log(showEvents);
  };
  handleChange = (e) => {
    if (e.target.name || e.target.date === "" || e.target.location === "")
      this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  render() {
    // const required = (value) => (value ? "Required" : undefined);
    return (
      <div>
        <div className="searchbar">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                name="name"
                placeholder="ARTIST"
                value={this.state.name}
                onChange={this.handleChange}
              ></input>
            </label>
            <label>
              {/* <select isSearchable validate={required}>
                <option></option>
                <option
                  value={this.state.location}
                  onChange={this.handleChange}
                >
                  Toronto
                </option>
                <option
                  value={this.state.location}
                  onChange={this.handleChange}
                >
                  Hamilton
                </option>
                <option
                  value={this.state.location}
                  onChange={this.handleChange}
                >
                  Quebec
                </option>
                <option
                  value={this.state.location}
                  onChange={this.handleChange}
                >
                  Vancouver
                </option>
                <option
                  value={this.state.location}
                  onChange={this.handleChange}
                >
                  Ottawa
                </option>
                <option
                  value={this.state.location}
                  onChange={this.handleChange}
                >
                  Calgary
                </option>
                <option
                  value={this.state.location}
                  onChange={this.handleChange}
                >
                  Winnipeg
                </option>
                <option
                  value={this.state.location}
                  onChange={this.handleChange}
                >
                  Edmonton
                </option>
                <option
                  value={this.state.location}
                  onChange={this.handleChange}
                >
                  Victoria
                </option>
                <option
                  value={this.state.location}
                  onChange={this.handleChange}
                >
                  Regina
                </option>
                <option
                  value={this.state.location}
                  onChange={this.handleChange}
                >
                  Brampton
                </option>
              </select> */}
              <input
                type="text"
                value={this.state.location}
                name="location"
                onChange={this.handleChange}
                required
              ></input>
            </label>
            <input
              type="datetime-local"
              id="meeting-time"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            ></input>
            <Routes>
              <Route
                path="/"
                element={
                  <button type="submit" onClick={this.handleSubmit}>
                    Search
                  </button>
                }
              />
            </Routes>
          </form>
        </div>
        <div>
          <div key={this.state.date}>{this.state.event}</div>
          {this.allEvents && this.allEvents.map((event) => <li>{event}</li>)}
        </div>
      </div>
    );
  }
}

export default SearchFeature;
