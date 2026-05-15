import Comment from "./Comment";

export async function PostComment({ eventId }) {
  "use server";

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments?eventId=${eventId}`,
      {
        method: "POST",
        body: JSON.stringify({
          id,
          name,
          content,
          date,
          email,
        }),
      },
    );

    const fetchComments = await response.json();

    return fetchComments.map((comment) => {
      return (
        <Comment
          key={comment.eventId}
          name={comment.name}
          content={comment.content}
          date={comment.date}
        />
      );
    });
  } catch (error) {
    return <p>Failed to load comments...</p>;
  }
}
