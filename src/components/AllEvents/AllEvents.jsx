import React, { useState, useEffect } from "react";
import HomePage from "../../pages/HomePage/HomePage";

export default function AllEvents({ userInput }) {
  const [event, setEvent] = useState([]);
  const [date, setDate] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=efomLcpWJQWbkN9TXlGgmOc98CZzZgkh&locale=*&startDateTime=2022-04-01T10:45:00Z&endDateTime=2022-04-30T10:45:00Z&countryCode=CA&segmentId=KZFzniwnSyZfZ7v7nJ`
      );
      const showEvents = await response.json();
      const eventName = showEvents._embedded.events;
      const eventDateMapped = eventName.map((el) => el.dates);
      const eventDate = eventDateMapped.map((el) => el.start.localDate);
      setDate({ date: eventDate });
      console.log("this is event date", eventDate);
      const eventMapped = eventName.map((el) => el.name);
      const savedEventName = localStorage.getItem("userInput");
      console.log("saved event name", savedEventName);
      for (let i = 0; i < eventMapped.length; i++) {
        if (savedEventName === undefined || savedEventName.length === 0) {
          setEvent({ event: eventName });
        } else if (savedEventName !== eventMapped[i]) {
          setEvent({ event: event });
          console.log("saved event mapped", eventMapped[i].charAt(i));
        } else if (
          savedEventName == eventMapped[i]
          // eventMapped[i].charAt(i) == savedEventName.charAt(i)
        ) {
          // const eventFilter = eventMapped.filter(
          //   (el) => el.name.indexOf(userInput) > -1
          // );
          // const eventFilter = eventMapped[i].split("").join("");
          setEvent({ event: savedEventName });
          return;
        }
        // return () => {};
      }
    }
    fetchData();
  }, []);
  // console.log(user);
  return (
    <div>
      These are a list of the events
      {!localStorage.getItem("userInput")
        ? event.event &&
          date.date &&
          // date.date.map((el) => <li>{el}</li>) &&
          event.event.map((el) => (
            <li>
              {el.name}/ {date.date.map((el) => el)}
            </li>
          ))
        : event.event}{" "}
      {event.date}
      <p>
        {/* {event.event &&
          event.event
            .filter(
              (n) => n.toLowerCase().indexOf(userInput.toLowerCase()) > -1
            )
            .map((n) => <li>{n}</li>)} */}
      </p>
      {/* )} */}
    </div>
  );
}
