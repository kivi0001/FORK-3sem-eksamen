import { ListEventInfo } from "@/app/components/events/ListEventInfo";
import Headline from "@/app/components/Headline";

export default function Events() {
  return (
    <main>
      <Headline text="events" />
      <ListEventInfo />
    </main>
  );
}
