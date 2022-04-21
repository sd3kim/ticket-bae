import { Route, Routes, useNavigate } from "react-router";
import { useState } from "react";
import AllEvents from "../../components/AllEvents/AllEvents";

function SearchFeature(props) {
  const [userInput, setUserInput] = useState({
    name: [],
    // location: "",
    date: [],
  });

  let handleChange = (e) => {
    if (e.target.name || e.target.date === "")
      setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  let storage = localStorage.setItem("userInput", userInput.name);

  let storage2 = localStorage.setItem("userInputDate", userInput.date);

  // console.log("storage", storage);

  const handleSubmit = (event) => {
    event.preventDefault();
    // pass saved userInput.name and userInput.date through a filter and show results in allEvents page
    navigate("/allEvents");
    const eventName = userInput.name;
    const eventDates = userInput.date;
    console.log("user event name input is: ", eventName);
    console.log("user date input is: ", eventDates);
  };
  let navigate = useNavigate();

  return (
    <div>
      <div className="searchbar">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              placeholder="ARTIST"
              value={userInput.name}
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
          <input
            type="date"
            id="meeting-time"
            name="date"
            value={userInput.date}
            onChange={handleChange}
          ></input>
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
