import React, { useState, useEffect } from "react";

export default function AllEvents({ userInput }) {
  const [event, setEvent] = useState([]);

  let allEvents = [];
  let allEvents2 = [];
  let noArtistsRightDate = [];
  let noArtistsRightDate2 = [];
  let artistsNoDate = [];
  let artistsWrongDate = [];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=efomLcpWJQWbkN9TXlGgmOc98CZzZgkh&locale=*&startDateTime=2022-04-01T10:45:00Z&endDateTime=2022-04-30T10:45:00Z&countryCode=CA&segmentId=KZFzniwnSyZfZ7v7nJ`
      );

      const showEvents = await response.json();
      const eventName = showEvents._embedded.events;
      const eventDateMapped = eventName.map((el) => el.dates);
      const eventDate = eventDateMapped.map((el) => el.start.localDate);
      const eventNameMapped = eventName.map((el) => el.name);
      const savedEventName = localStorage.getItem("userInput");
      const savedEventDate = localStorage.getItem("userInputDate");

      for (let i = 0; i < eventNameMapped.length; i++) {
        // if no input for name or date is given:
        if (savedEventName.length === 0 && savedEventDate.length === 0) {
          allEvents.push(eventNameMapped[i], eventDate[i]);

          // no event name and only date AND date exists
        } else if (
          savedEventName.length === 0 &&
          savedEventDate === eventDate[i]
        ) {
          let eventMatched = eventNameMapped[i];
          console.log("empty input and only date", eventMatched);
          noArtistsRightDate.push(eventNameMapped[i], eventDate[i]);
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
          artistsNoDate.push(eventNameMapped[i], eventDate[i]);
        }
        // if there is an artist but they are not playing on that specific day
        else if (
          savedEventName === eventNameMapped[i] &&
          savedEventDate !== eventDate[i]
        ) {
          //add a message saying artist is not playing on this date but these are the alternatives
          artistsWrongDate.push(eventNameMapped[i], eventDate[i]);
        } else {
          setEvent({ allEvents2: "no event found" });
          console.log("no events found");
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
        artistsWrongDate: artistsWrongDate,
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
        {event.allEvents &&
          event.allEvents.map((result2) => <li>{result2}</li>)}

        {event.noArtistsRightDate &&
          event.noArtistsRightDate.map((result2) => <li>{result2}</li>)}

        {event.artistsNoDate &&
          event.artistsNoDate.map((result2) => <li>{result2}</li>)}

        {event.artistsWrongDate &&
          event.artistsWrongDate.map((result2) => <li>{result2}</li>)}
      </div>
    </div>
  );
}
