import Header from "@/app/components/Header";
import Headline from "@/app/components/Headline";
import { Suspense } from "react";
import { EventFetch } from "@/app/components/booktable/EventFetch";
import ChooseNightForm from "@/app/components/booktable/ChooseNightForm";
import Loading from "@/app/loading";
import BookingWrapper from "@/app/components/booktable/BookingWrapper";

const BookTable = ({ params }) => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Details params={params}></Details>
      </Suspense>
    </main>
  );
};

const Details = async ({ params }) => {
  const { id } = await params;
  const events = await EventFetch();

  /* AI HELPED WITH THIS */
  /* se synopsis om AI brug: Book Table */
  if (!id) {
    return (
      <main>
        <div className="sticky-container">
          <Header />
        </div>
        <Headline text="Book Table" />
        <section className="justify-center items-center place-content-center col-span-full mt-large">
          <ChooseNightForm events={events} />
          <p className="text-center my-large">
            Please select a night to see available
            tables
          </p>
        </section>
      </main>
    );
  }
  /*   ******************* */

  const eventResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${id}`,
  );

  const event = await eventResponse.json();

  const resResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
  );
  const fetchReserved = await resResponse.json();
  const reserved = fetchReserved
    .filter(
      (eventRes) => eventRes.eventId === event.id,
    )
    .map((res) => res.table);

  return (
    <main>
      <div className="sticky-container">
        <Header />
      </div>
      <Headline text="Book Table" />
      <section className="grid grid-cols-subgrid col-span-full mt-8">
        <BookingWrapper
          event={event}
          events={events}
          reserved={reserved}
        />
      </section>
    </main>
  );
};

export default BookTable;
