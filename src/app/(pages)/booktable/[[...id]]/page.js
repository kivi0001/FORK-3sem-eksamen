import BookTableForm from "@/app/components/booktable/BookTableForm";
import Headline from "@/app/components/Headline";
import Tables from "@/app/components/booktable/Tables";
import { Suspense } from "react";
import { EventFetch } from "@/app/components/booktable/EventFetch";
import BookEventHeadline from "@/app/components/booktable/BookEventHeadline";
import ChooseNightForm from "@/app/components/booktable/ChooseNightForm";

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
  const events = await EventFetch();

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
        <ChooseNightForm events={events} />
        <Tables eventId={event.id} />
        <BookTableForm
          eventDate={event.date}
          events={events}
        >
          <EventFetch />
        </BookTableForm>
      </section>
    </main>
  );
};

export default BookTable;
