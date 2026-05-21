import { Suspense } from "react";
import { TestimonialsFetch } from "./TestimonialsFetch";
import Image from "next/image";

const TestimonialsSection = ({ id }) => {
  return (
    <section className="testimonials-section flex justify-center my-10 relative">
      <Suspense>
        <ul className="testimonials-scroller flex">
          <TestimonialsFetch id={id} />
        </ul>
      </Suspense>
      <Image
        className="opacity-10 brightness-45"
        src="/assets/bg/footerbg.jpg"
        layout="fill"
        objectFit="cover"
        alt="headline background"
      />
    </section>
  );
};

export default TestimonialsSection;
