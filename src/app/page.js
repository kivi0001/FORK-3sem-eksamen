import { Suspense } from "react";
import Hero from "./components/homepage/Hero";
import WelcomeSection from "./components/homepage/welcomesection/WelcomeSection";
import FeaturedSection from "./components/homepage/featuredevents_section/FeaturedSection";
import HomeHeadlines from "./components/homepage/HomeHeadlines";

export default function Home() {
  return (
    <main className="">
      <Suspense>
        <Hero />
      </Suspense>
      <WelcomeSection />
      <FeaturedSection />
    </main>
  );
}
