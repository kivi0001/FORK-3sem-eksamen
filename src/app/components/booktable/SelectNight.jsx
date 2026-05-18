import { EventFetch } from "./EventFetch";

export async function SelectNight({ event }) {
  return (
    <select
      name="choiceNight"
      id="choiceNight"
      placeholder="Choose Night"
      className="border p-4 w-[30em] text-(--color-placeholderfont)"
    >
      <option
        className="text-(--color-formfont)"
        value=""
      >
        Choose Night
      </option>
      <EventFetch event={event}></EventFetch>
    </select>
  );
}
