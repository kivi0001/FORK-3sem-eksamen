import PrimaryButtons from "./components/buttons/PrimaryButtons";
import { ListEventInfo } from "./components/events/ListEventInfo";
import { Suspense } from "react";
import Hero from "./components/homepage/Hero";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <div>
          <PrimaryButtons textInput="click me" />
          <ListEventInfo />
        </div>
      </main>
    </div>
  );
}
