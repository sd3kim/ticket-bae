import React, { useState, useEffect } from "react";

export default function AllEvents({ userInput }) {
  const [event, setEvent] = useState([]);

  let allEvents = [];
  let allEvents2 = [];
  let noArtistsRightDate = [];
  let noArtistsRightDate2 = [];
  let artistsNoDate = [];
  let artistsWrongDate = [];

  const [event2, setEvent2] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=efomLcpWJQWbkN9TXlGgmOc98CZzZgkh&locale=*&startDateTime=2022-04-01T10:45:00Z&endDateTime=2022-04-30T10:45:00Z&countryCode=CA&segmentId=KZFzniwnSyZfZ7v7nJ`
      );

      const showEvents = await response.json();
      const eventName = showEvents._embedded.events;
      const eventDateMapped = eventName.map((el) => el.dates);
      const eventDate = eventDateMapped.map((el) => el.start.localDate);
      // console.log("event date", eventDate);
      const eventNameMapped = eventName.map((el) => el.name);
      const savedEventName = localStorage.getItem("userInput");
      const savedEventDate = localStorage.getItem("userInputDate");
      // console.log("saved event name", savedEventName);
      // console.log("saved event date", savedEventDate);
      // console.log("saved event mapped", eventNameMapped);
      // debugger;
      for (let i = 0; i < eventNameMapped.length; i++) {
        // if no input for name or date is given:
        if (savedEventName.length === 0 && savedEventDate.length === 0) {
          allEvents.push(eventNameMapped[i]);
          allEvents2.push(eventDate[i]);
          setEvent({ event: eventNameMapped[i], date: eventDate[i] });
          // console.log("showing all events", eventNameMapped[i], eventDate[i]);
          // no event name and only date AND date exists
        } else if (
          savedEventName.length === 0 &&
          savedEventDate === eventDate[i]
        ) {
          let eventMatched = eventNameMapped[i];
          console.log("empty input and only date", eventMatched);
          noArtistsRightDate.push(eventNameMapped[i]);
          noArtistsRightDate2.push(eventDate[i]);
          // no event name and only date BUT date doesn't exist
        } else if (
          savedEventName.length === 0 &&
          savedEventDate !== eventDate[i]
        ) {
          console.log("no artist is playing on that date");
        }
        // if name is inputted but NO date, show ALL events with that name
        else if (
          savedEventName === eventNameMapped[i] &&
          savedEventDate.length === 0
        ) {
          artistsNoDate.push(eventDate[i]);
        }
        // if there is an artist but they are not playing on that specific day
        else if (
          savedEventName === eventNameMapped[i] &&
          savedEventDate !== eventDate[i]
        ) {
          artistsWrongDate.push(eventDate[i]);
        }
        // if the inputted event name exists, and it is on the selected date:
        else if (
          savedEventName === eventNameMapped[i] &&
          savedEventDate === eventDate[i]
        ) {
          console.log("the given artist is playing on the given date");
        } else if (savedEventName !== eventNameMapped[i]) {
          console.log(`${savedEventName} does not exist`);
        }
      }

      console.log("These are all the events:", allEvents);
      console.log(
        `These artists are playing on ${savedEventDate}: `,
        noArtistsRightDate
      );
      console.log(
        `These are all the shows the artists ${savedEventName} will be playing: `,
        artistsNoDate
      );

      setEvent({
        noArtistsRightDate: noArtistsRightDate,
        artistsNoDate: artistsNoDate,
      });

      setEvent2({
        allEvents: allEvents,
        allEvents2: allEvents2,
      });
    }
    fetchData();
  }, []);

  console.log("result:", event.allEvents, " date: ", event.allEvents2);
  console.log("result2:", event.noArtistsRightDate);

  console.log("this is the result:", allEvents);
  console.log("this is the new result: ", localStorage.getItem("somethingNew"));

  return (
    <div>
      These are a list of the events:
      <div>
        {event2.allEvents &&
          event2.allEvents.map((result2) => <li>{result2}</li>)}

        {event.noArtistsRightDate &&
          event.noArtistsRightDate.map((result2) => <li>{result2}</li>)}

        {event.artistsNoDate &&
          event.artistsNoDate.map((result2) => <li>{result2}</li>)}

        {/* if empty artist and empty date is true, print out the event name and date */}
        {/* {!localStorage.getItem("userInput") &&
        !localStorage.getItem("userInputDate")
          ? event.event && (
              <li>
                Event: {event.event} - Event Date: {event.date}
              </li>
            )
          : // if empty user and selected date, print out the associated events and date
          !localStorage.getItem("userInput") &&
            localStorage.getItem("userInputDate")
          ? event.event && (
              <li>
                Event: {event.event} - Event Date: {event.date}
              </li>
            )
          : localStorage.getItem("userInput") &&
            !localStorage.getItem("userInputDate")
          ? event.date && (
              <li>
                Event: {event.event} - Event Date: {event.date}
              </li>
            )
          : event.event} */}
      </div>
    </div>
  );
}
