import Comment from "./Comment";
import { cacheLife } from "next/cache";

export async function EventComments({ id }) {
  "use cache";
  cacheLife("hours");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments?eventId=${id}`,
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
