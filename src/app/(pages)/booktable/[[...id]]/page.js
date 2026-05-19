import BookTableForm from "@/app/components/booktable/BookTableForm";
import Headline from "@/app/components/Headline";
import Tables from "@/app/components/booktable/Tables";
import { Suspense } from "react";
import { EventFetch } from "@/app/components/booktable/EventFetch";
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
      <Headline text="Book Table" />
      <h2>{event.title}</h2>
      <h2>{event.date}</h2>
      <Tables />
      <BookTableForm>
        <EventFetch />
      </BookTableForm>
    </main>
  );
};

export default BookTable;
