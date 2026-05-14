import { Suspense } from "react";
import Hero from "./components/homepage/Hero";
import WelcomeSection from "./components/homepage/welcomesection/WelcomeSection";
import GallerySection from "./components/homepage/night_club_gallery/GallerySection";
import FeaturedSection from "./components/homepage/featuredevents_section/FeaturedSection";
import TestimonialsSection from "./components/homepage/testimonials_section/TestimonialsSection";
import LatestVideo from "./components/latest_video/LatestVideoSection";
export default function Home() {
  return (
    <main className="">
      <Suspense>
        <Hero />
      </Suspense>
      <WelcomeSection />
      <FeaturedSection />
      <GallerySection />
      <LatestVideo />
      <TestimonialsSection />
    </main>
  );
}
