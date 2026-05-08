import { Suspense } from "react";
import Hero from "./components/homepage/Hero";
import WelcomeSection from "./components/homepage/1: Welcome section/WelcomeSection";

export default function Home() {
  return (
    <main className="">
      <Suspense>
        <Hero />
      </Suspense>
      <WelcomeSection />
    </main>
  );
}
