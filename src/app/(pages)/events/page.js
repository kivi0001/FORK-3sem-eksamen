import { ListEventInfo } from "@/app/components/events/ListEventInfo";
import Header from "@/app/components/Header";
import Headline from "@/app/components/Headline";
import { Suspense } from "react";

export default function Events({ searchParams }) {
  return (
    <main>
      <Header />
      <Headline text="events" />
      <Suspense fallback={"loading events..."}>
        <ListEventInfo
          searchParams={searchParams}
        />
      </Suspense>
    </main>
  );
}
