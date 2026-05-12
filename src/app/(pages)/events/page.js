import { ListEventInfo } from "@/app/components/events/ListEventInfo";
import { Suspense } from "react";

export default function Events({ searchParams }) {
  return (
    <main>
      <Suspense
        fallback={<div>Loading events...</div>}
      >
        <ListEventInfo
          searchParams={searchParams}
        />
      </Suspense>
    </main>
  );
}
