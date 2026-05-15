export async function PostComment(formComment) {
  /* AI HJALP MED DETTE: HUSK AT MEDTAGE VARIABLER */

  const { eventId, name, email, comment } =
    formComment;

  /**********************/

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments?eventId=${eventId}`,
      {
        method: "POST",
        body: JSON.stringify({
          eventId,
          name,
          content: comment,
          date: new Date(),
          email,
        }),
      },
    );
  } catch (error) {
    return <p>Failed to load comments form...</p>;
  }
}
