import { cacheLife } from "next/cache";
import Testiment from "./Testiment";

export async function TestimonialsFetch() {
  "use cache";
  cacheLife("hours");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/testimonials`,
    );

    const fetchTestimonials =
      await response.json();

    const featuredTestaments =
      fetchTestimonials.filter(
        (testiment) => testiment,
      );
    return featuredTestaments.map(
      (testiment, index) => {
        return (
          <Testiment
            key={testiment.id}
            name={testiment.name}
            index={index}
            facebook={testiment.facebook}
            twitter={testiment.twitter}
            testiment={testiment.content}
            imgsrc={`${process.env.NEXT_PUBLIC_API_URL}${testiment.asset.url}`}
            alt={testiment.asset.alt}
          />
        );
      },
    );
  } catch (error) {
    return <p>Failed to load testimonials...</p>;
  }
}
