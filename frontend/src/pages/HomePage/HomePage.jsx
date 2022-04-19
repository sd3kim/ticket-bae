import React from "react";
import Navbar from "../../components/Navbar/Navbar";

export default function HomePage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // if artist location and date are empty
    // show all events
    window.location.href = "/allEvents";
    // alert("Submit has been clicked");
  };
  return (
    <div>
      <h1>TicketBae</h1>
      <div className="searchbar">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="artist"
              placeholder="ARTIST"
              // value={data.name}
            ></input>
          </label>
          <label>
            <input
              type="text"
              name="Location"
              placeholder="LOCATION"
              // value={event.userName}
            ></input>
          </label>
          <select value="date" onChange={() => "hello"}>
            <option value="empty" placeholder="Date"></option>
            <option value="jan-march">JAN-MARCH</option>
            <option value="apr-june">APRIL-JUNE</option>
            <option value="july-sept">JULY-SEPT</option>
            <option value="oct-dec">OCT-DEC</option>
          </select>
          {/* <input type="submit" value="Search" onSubmit={handleSubmit} /> */}
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
