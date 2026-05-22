"use server";
export async function EventFetch() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events`,
    );

    const fetchEvents = await response.json();

    return fetchEvents;
  } catch (error) {
    return [];
  }
}
