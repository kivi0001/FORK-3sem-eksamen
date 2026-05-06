import PrimaryButtons from "./components/buttons/PrimaryButtons";
import { SingleEventInfo } from "./components/events/SingleEventInfo";
export default function Home() {
  return (
    <div className="">
      <main className="">
        Hej Kia, vi tester nightclub
        <div>
          <PrimaryButtons textInput="click me" />
          <SingleEventInfo />
        </div>
      </main>
    </div>
  );
}
