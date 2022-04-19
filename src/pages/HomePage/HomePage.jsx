import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Route, Routes, useNavigate } from "react-router";
import axios from "axios";
import AllEvents from "../../components/AllEvents/AllEvents";
export default function HomePage() {
  const axios = require("axios");
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/allEvents");
  };
  let navigate = useNavigate();
  const [data, setdata] = useState({
    name: [],
    location: "",
    date: "",
    user: [],
  });
  let handleChange = (e) => {
    this.useState({ [e.target.name]: e.target.value });
  };

  // const encodedParams = new URLSearchParams();
  // encodedParams.append("apiKey", "<REQUIRED>");

  // const options = {
  //   method: "POST",
  //   url: "https://ticketmasterstefan-skliarovv1.p.rapidapi.com/searchVenues",
  //   headers: {
  //     "content-type": "application/x-www-form-urlencoded",
  //     "X-RapidAPI-Host": "Ticketmasterstefan-skliarovV1.p.rapidapi.com",
  //     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  //   },
  //   data: encodedParams,
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  return (
    <div>
      <h1>TicketBae</h1>
      <div className="searchbar">
        <form>
          <label>
            <input
              type="text"
              name="name"
              placeholder="ARTIST"
              value={data.artist}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            <input
              type="text"
              name="location"
              placeholder="LOCATION"
              value={data.location}
              onChange={handleChange}
            ></input>
          </label>
          <select name="date" value={data.date} onChange={handleChange}>
            <option value="empty" placeholder="Date"></option>
            <option value="jan-march">JAN-MARCH</option>
            <option value="apr-june">APRIL-JUNE</option>
            <option value="july-sept">JULY-SEPT</option>
            <option value="oct-dec">OCT-DEC</option>
          </select>
          <Routes>
            <Route
              path="/"
              element={
                <button onClick={handleSubmit} type="submit">
                  Search
                </button>
              }
            />
          </Routes>
          {/* <input type="submit" value="Search" onSubmit={handleSubmit} /> */}
        </form>
        <AllEvents set={data.user} />
      </div>
    </div>
  );
}
