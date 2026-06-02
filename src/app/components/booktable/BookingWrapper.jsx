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
      />
    </>
  );
};

export default BookingWrapper;
