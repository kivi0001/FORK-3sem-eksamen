import { TestimonialsFetch } from "./TestimonialsFetch";
import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section flex justify-center my-small relative bg-background min-w-screen min-h-fit object-cover">
      <TestimonialsFetch />
      <Image
        className="opacity-10 brightness-45"
        src="/assets/bg/footerbg.webp"
        layout="fill"
        alt="headline background"
      />
    </section>
  );
};

export default TestimonialsSection;
