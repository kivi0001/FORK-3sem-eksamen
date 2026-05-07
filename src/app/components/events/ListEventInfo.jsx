import { cacheLife } from "next/cache";
import ListEventCard from "./ListEventCard";

export async function ListEventInfo() {
  "use cache";
  cacheLife("hours");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events`,
    );

    const FetchEvents = await response.json();

    return FetchEvents.map((event) => {
      return (
        <ListEventCard
          key={event.id}
          date={event.date}
          location={event.location}
          title={event.title}
          description={event.description}
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
