import { cacheLife } from "next/cache";
import SingleEventCard from "./SingleEventCard";

export async function SingleEventInfo() {
  "use cache";
  cacheLife("hours");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events`,
    );

    const FetchEvents = await response.json();

    return FetchEvents.map((event) => {
      return (
        <SingleEventCard
          key={event.id}
          date={event.date}
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
