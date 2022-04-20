import React, { useState, useEffect } from "react";

export default function AllEvents({ userInput }) {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=efomLcpWJQWbkN9TXlGgmOc98CZzZgkh&segmentId=KZFzniwnSyZfZ7v7nJ`
      );
      const showEvents = await response.json();
      const eventName = showEvents._embedded.events;
      const eventDateMapped = eventName.map((el) => el.dates);
      const eventDate = eventDateMapped.map((el) => el.start.localDate);
      console.log("event date", eventDate);
      const eventMapped = eventName.map((el) => el.name);
      const savedEventName = localStorage.getItem("userInput");
      console.log("saved event name", savedEventName);
      console.log("saved event mapped", eventMapped);
      for (let i = 0; i < eventMapped.length; i++) {
        if (savedEventName === undefined || savedEventName.length === 0) {
          setEvent({ event: eventName });
        } else if (savedEventName !== eventMapped[i]) {
          setEvent({ event: "there are no events" });
        } else if (savedEventName == eventMapped[i]) {
          // const eventFilter = eventMapped.filter(
          //   (el) => el.name.indexOf(userInput) > -1
          // );
          const eventFilter = eventMapped[i].split("").join("");
          setEvent({ event: eventFilter });
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
      {!localStorage.getItem("userInput") ? (
        event.event && event.event.map((el) => <li>{el.name}</li>)
      ) : (
        <li>{event.event}</li>
      )}
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
