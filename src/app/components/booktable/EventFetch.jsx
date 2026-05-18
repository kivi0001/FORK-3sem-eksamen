import BookEventTitle from "./BookEventTitle";
import { cacheLife } from "next/cache";

export async function EventFetch() {
  "use cache";
  cacheLife("hours");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events`,
    );

    const fetchEvents = await response.json();
    return fetchEvents.map((event) => {
      return (
        <BookEventTitle
          key={event.id}
          slug={event.slug}
          date={event.date}
          location={event.location}
          title={event.title}
          description={event.excerpt}
          imagesrc={`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset?.url}`}
          alt={
            event.heroAsset?.alt ||
            event.asset.alt
          }
        />
      );
    });
  } catch (error) {
    return (
      <p>Failed to load upcoming events...</p>
    );
  }
}
