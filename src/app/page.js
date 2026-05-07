import PrimaryButtons from "./components/buttons/PrimaryButtons";
import { ListEventInfo } from "./components/events/ListEventInfo";
import { Suspense } from "react";
export default function Home() {
  return (
    <div className="">
      <main className="">
        Hej Kia, vi tester nightclub
        <div>
          <PrimaryButtons textInput="click me" />
          <ListEventInfo />
        </div>
      </main>
    </div>
  );
}
