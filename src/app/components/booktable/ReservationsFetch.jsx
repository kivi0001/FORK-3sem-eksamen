import Tables from "./Tables";

export async function ReservationsFetch() {
  "use server";
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/reservations?eventId=${eventId}`,
    );

    const fetchReservations =
      await response.json();
    const reserved = fetchReservations.map(
      (eventRes) => {
        return (
          <Tables
            key={eventRes.id}
            id={eventRes.id}
            name={eventRes.name}
            date={eventRes.date}
            table={eventRes.table}
            email={eventRes.email}
            guests={eventRes.guests}
            phone={eventRes.phone}
            eventId={eventRes.eventId}
            reserved={reserved}
          />
        );
      },
    );
  } catch (error) {
    return <p>Failed to load reservations...</p>;
  }
}
