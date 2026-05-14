import AmountComments from "./AmountComments";

export async function AmountFetch({ id }) {
  "use server";

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments?eventId=${id}`,
    );

    const fetchComments = await response.json();

    return (
      <AmountComments
        amount={fetchComments.length}
      />
    );
  } catch (error) {
    return <p>Failed to load comments...</p>;
  }
}
