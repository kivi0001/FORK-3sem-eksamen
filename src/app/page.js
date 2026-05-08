import { main } from "framer-motion/client";
import PrimaryButtons from "./components/buttons/PrimaryButtons";
import { ListEventInfo } from "./components/events/ListEventInfo";
import { Suspense } from "react";
import Hero from "./components/homepage/Hero";

export default function Home() {
  return (
    <main className="">
      <Suspense>
        <Hero />
      </Suspense>
    </main>
  );
}
