import Comment from "./Comment";

export async function EventComments({ id }) {
  "use server";

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments?eventId=${id}`,
    );

    const fetchComments = await response.json();

    return fetchComments.map((comment) => {
      return (
        <Comment
          key={comment.id}
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
