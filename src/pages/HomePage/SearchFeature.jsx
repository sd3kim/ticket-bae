import { Route, Routes, useNavigate } from "react-router";
import { useState } from "react";

function SearchFeature() {
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
  return (
    <div>
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
      </div>
    </div>
  );
}

export default SearchFeature;
