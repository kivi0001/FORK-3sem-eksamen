"use client";

import BookEventHeadline from "./BookEventHeadline";
import BookTableForm from "./BookTableForm";
import ChooseNightForm from "./ChooseNightForm";
import TablesClient from "./TablesClient";
import { useState } from "react";

const BookingWrapper = ({
  event,
  events,
  reserved,
}) => {
  const [selectedTable, setSelectedTable] =
    useState();

  const resetSelection = () => {
    console.log("Resetting selection");
    setSelectedTable(null);
  };
  return (
    <>
      <BookEventHeadline
        title={event.title}
        date={event.date}
      />
      <ChooseNightForm events={events} />
      <TablesClient
        eventId={event.id}
        reserved={reserved}
        selectedTable={selectedTable}
        setSelectedTable={setSelectedTable}
      />
      <BookTableForm
        eventId={event.id}
        eventDate={event.date}
        events={events}
        selectedTable={selectedTable}
        selectionReset={resetSelection}
      />
    </>
  );
};

export default BookingWrapper;
