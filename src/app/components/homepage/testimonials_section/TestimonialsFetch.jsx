import { cacheLife } from "next/cache";
import TestimonialSlider from "./TestimonialsSlider";

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

    return (
      <TestimonialSlider
        testimonials={featuredTestaments}
      />
    );
  } catch (error) {
    return <p>Failed to load testimonials...</p>;
  }
}
