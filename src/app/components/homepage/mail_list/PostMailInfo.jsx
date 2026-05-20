"use server";

export async function PostMailInfo({ email }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/newsletters`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      },
    );

    if (!response.ok) {
      const errorEmail = await response.json();
      return {
        success: false,
        error: errorEmail.message,
      };
    }

    const data = await response.json();
    return { sucess: true, data };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}
