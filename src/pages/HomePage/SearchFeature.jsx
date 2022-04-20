import { Route, Routes, useNavigate } from "react-router";
import { useState } from "react";
import AllEvents from "../../components/AllEvents/AllEvents";

function SearchFeature(props) {
  const [userInput, setUserInput] = useState({
    name: "",
    // location: "",
    date: "",
  });

  let handleChange = (e) => {
    if (e.target.name || e.target.location || e.target.date === "")
      setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  // let storage = localStorage.setItem("userInput", userInput.name);
  // console.log("storage", storage);

  const handleSubmit = (event) => {
    event.preventDefault();
    // navigate("/allEvents");
    console.log(userInput);
  };
  // let navigate = useNavigate();

  return (
    <div>
      <div className="searchbar">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              placeholder="ARTIST"
              value={userInput.artist}
              onChange={handleChange}
            ></input>
          </label>
          {/* <label>
            <input
              type="text"
              name="location"
              placeholder="LOCATION"
              value={userInput.location}
              onChange={handleChange}
            ></input>
          </label> */}
          <select name="date" value={userInput.date} onChange={handleChange}>
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
        </form>
      </div>
    </div>
  );
}

export default SearchFeature;
