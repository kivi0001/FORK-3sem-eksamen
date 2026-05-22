import BookTableForm from "@/app/components/booktable/BookTableForm";
import Headline from "@/app/components/Headline";
import Tables from "@/app/components/booktable/Tables";
import { Suspense } from "react";
import { EventFetch } from "@/app/components/booktable/EventFetch";
import { ReservationsFetch } from "@/app/components/booktable/ReservationsFetch";
import BookEventHeadline from "@/app/components/booktable/BookEventHeadline";

const BookTable = ({ params }) => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Details params={params}></Details>
      </Suspense>
    </main>
  );
};

const Details = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${id}`,
  );

  const event = await response.json();

  return (
    <main>
      <section className="grid grid-cols-subgrid col-span-full">
        <Headline text="Book Table" />
        <BookEventHeadline
          title={event.title}
          date={event.date}
        />
        <Tables eventId={event.id} />
        <BookTableForm eventDate={event.date}>
          <EventFetch />
        </BookTableForm>
      </section>
    </main>
  );
};

export default BookTable;
