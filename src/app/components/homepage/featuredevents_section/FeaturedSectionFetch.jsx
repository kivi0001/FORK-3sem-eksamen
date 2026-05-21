import FeaturedEventsCard from "./FeaturedEventsCard";
import { cacheLife } from "next/cache";

export async function FeaturedSectionFetch() {
  "use cache";
  cacheLife("hours");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events`,
    );

    const fetchEvents = await response.json();
    const featuredEvents = fetchEvents.filter(
      (event) => event.isFeatured === true,
    );

    return featuredEvents.map((event, index) => {
      return (
        <FeaturedEventsCard
          id={event.id}
          key={event.id}
          slug={event.slug}
          index={index}
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
