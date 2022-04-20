import { Route, Routes, useNavigate } from "react-router";
import { useState } from "react";
import AllEvents from "../../components/AllEvents/AllEvents";

function SearchFeature() {
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/allEvents");
  };
  let navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    name: "",
    // location: "",
    date: "",
  });
  let handleChange = (e) => {
    if (e.target.name || e.target.date === "")
      setUserInput({ ...userInput, [e.target.name]: e.target.value });
    console.log("e.target", setUserInput.date);
  };
  let storage = localStorage.setItem("userInput", userInput.name);
  console.log(localStorage.setItem("usersInput", userInput));
  console.log("storage", storage);
  console.log("name", userInput.name);
  console.log("date", userInput.date);
  return (
    <div>
      <div className="searchbar">
        <form>
          <label>
            <input
              type="text"
              name="artist"
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
