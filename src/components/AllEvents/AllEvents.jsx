import React, { useState, useEffect } from "react";

export default function AllEvents({ userInput }) {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=efomLcpWJQWbkN9TXlGgmOc98CZzZgkh&locale=*&startDateTime=2022-04-01T10:45:00Z&endDateTime=2022-04-30T10:45:00Z&countryCode=CA&segmentId=KZFzniwnSyZfZ7v7nJ`
      );

      const showEvents = await response.json();
      const eventName = showEvents._embedded.events;
      const eventDateMapped = eventName.map((el) => el.dates);
      const eventDate = eventDateMapped.map((el) => el.start.localDate);
      console.log("event date", eventDate);
      const eventNameMapped = eventName.map((el) => el.name);
      const savedEventName = localStorage.getItem("userInput");
      const savedEventDate = localStorage.getItem("userInputDate");
      // console.log("saved event name", savedEventName);
      // console.log("saved event date", savedEventDate);
      // console.log("saved event mapped", eventNameMapped);

      for (let i = 0; i < eventNameMapped.length; i++) {
        // if no input for name or date is given:
        if (savedEventName.length === 0 && savedEventDate.length === 0) {
          let list = [];
          list.push(eventNameMapped[i]);
          setEvent({ event: eventNameMapped[i], date: eventDate[i] });
          console.log("all events", eventNameMapped[i], eventDate[i]);
          // console.log(eventNameMapped[i]);
          // no event name and only date
        } else if (
          savedEventName.length === 0 &&
          savedEventDate === eventDate[i]
        ) {
          // if (eventNameMapped[i].includes(savedEventDate)) {
          let eventMatched = eventNameMapped[i];
          setEvent({ date: savedEventDate, event: eventMatched });
          // } else {
          console.log("empty input and only date", eventMatched);

          // if the given name doesn't match
        } else if (
          savedEventName !== eventNameMapped[i] &&
          savedEventDate === 0
        ) {
          console.log("no events");
          setEvent({ event: "there are no events" });
          // if the given date doesn't match
          // code here
          // if name AND date matches:
        } else if (
          savedEventName === eventNameMapped[i] &&
          savedEventDate === eventDate[i]
        ) {
          // const eventFilterName = eventNameMapped.filter(
          //   (el) => el.indexOf(savedEventName) > -1
          // );
          // const eventFilterDate = eventDate.filter(
          //   (el) => el.indexOf(savedEventDate) > -1
          // );
          setEvent({ event: savedEventName, date: savedEventDate });
          console.log(
            "date and input all selected",
            { event },
            savedEventName,
            eventDate[i]
          );
          // return;
        }
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      These are a list of the events
      {/* {!localStorage.getItem("userInput") ? (
        event.event &&
        event.event.map((el) => (
          <li>
            {el.name}
            {el.date}
          </li>
        ))
      ) : (
        <li>
          {event.event}, {event.date}
        </li>
      )} */}
      {!localStorage.getItem("userInput") &&
      !localStorage.getItem("userInputDate")
        ? event.event && (
            // event.event.map((el) => (
            // event.date.map((l) => (
            <li>
              {event.event},{event.date}
            </li>
          )
        : // ))
        // ))
        // event.event.map((el) => (
        !localStorage.getItem("userInput") &&
          localStorage.getItem("userInputDate")
        ? event.event && (
            <li>
              {event.event},{event.date}
            </li>
          )
        : localStorage.getItem("userInput") &&
          !localStorage.getItem("userInputDate")
        ? event.date &&
          event.date.map((el) => (
            <li>
              {event.event}, {el.date}
            </li>
          ))
        : event.event}
    </div>
  );
}
