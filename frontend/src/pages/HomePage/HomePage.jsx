import React from "react";
import Navbar from "../../components/Navbar/Navbar";

export default function HomePage() {
  return (
    <div>
      <h1>TicketBae</h1>
      <div className="searchbar">
        <form>
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
          <input type="submit" value="Search" onChange={() => "hello"} />
        </form>
      </div>
    </div>
  );
}
