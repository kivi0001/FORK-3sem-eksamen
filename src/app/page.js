import { main } from "framer-motion/client";
import PrimaryButtons from "./components/buttons/PrimaryButtons";
import { ListEventInfo } from "./components/events/ListEventInfo";
import { Suspense } from "react";
export default function Home() {
  return (
    <main>
      <ListEventInfo />
    </main>
  );
}
