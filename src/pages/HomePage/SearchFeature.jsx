import React from "react";
import { Route, Routes, useNavigate } from "react-router";

function SearchFeature() {
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/allEvents");
  };
  let navigate = useNavigate();

  return (
    <div>
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
      </div>
    </div>
  );
}

export default SearchFeature;
