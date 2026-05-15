import CommentForm from "./CommentForm";

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
        <>
          <CommentForm
            key={comment.id}
            event={comment.eventId}
            name={comment.name}
            content={comment.content}
            date={comment.Date()}
          />
          <div className="ml-auto mt-5">
            <PrimaryButtons
              type="submit"
              textInput="submit"
              onClick={() => {
                (updateCommentSection,
                  PostComment);
              }}
            ></PrimaryButtons>
          </div>
        </>
      );
    });
  } catch (error) {
    return <p>Failed to load comments form...</p>;
  }
}
