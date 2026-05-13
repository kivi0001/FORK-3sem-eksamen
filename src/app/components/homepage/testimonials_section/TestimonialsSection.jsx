import { TestimonialsFetch } from "./TestimonialsFetch";
import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section flex justify-center my-10 relative">
      <ul className="testimonials-scroller">
        <TestimonialsFetch />
      </ul>
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
