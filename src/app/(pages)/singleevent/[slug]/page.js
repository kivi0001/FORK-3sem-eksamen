import CommentForm from "@/app/components/singleevent/CommentForm";
import EventComments from "@/app/components/singleevent/EventComments";
import EventOverview from "@/app/components/singleevent/EventOverview";
import { Suspense } from "react";

const SingleEvent = ({ params }) => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Details params={params}></Details>
      </Suspense>
    </main>
  );
};

const Details = async ({ params }) => {
  const { slug } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${slug}`,
  );

  const event = await response.json();

  return (
    <main>
      <EventOverview />
      <EventComments />
      <CommentForm />
    </main>
  );
};

export default SingleEvent;
