"use server";

export async function PostComment({
  eventId,
  name,
  email,
  comment,
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments?eventId=${eventId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId,
          name,
          content: comment,
          /* AI HELPED WITH THIS */
          date: new Date().toISOString(),
          /************/
          email,
        }),
      },
    );
    /* AI HELPED WITH THIS: */
    if (!response.ok) {
      const errorComment = await response.json();
      return {
        success: false,
        error: errorComment.message,
      };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  /***************/
}
