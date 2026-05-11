import { Suspense } from "react";
import Hero from "./components/homepage/Hero";
import WelcomeSection from "./components/homepage/welcomesection/WelcomeSection";
import GallerySection from "./components/homepage/night_club_gallery/GallerySection";

export default function Home() {
  return (
    <main className="">
      <Suspense>
        <Hero />
      </Suspense>
      <WelcomeSection />
      <GallerySection />
    </main>
  );
}
