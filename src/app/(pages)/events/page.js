import { ListEventInfo } from "@/app/components/events/ListEventInfo";
import Headline from "@/app/components/Headline";
import Link from "next/link";

export default function Events() {
  return (
    <main>
      <Headline text="events" />
      <ListEventInfo />
    </main>
  );
}
