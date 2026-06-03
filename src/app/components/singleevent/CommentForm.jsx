"use client";
import { useForm } from "react-hook-form";
import PrimaryButtons from "../buttons/PrimaryButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { PostComment } from "./PostComment";

const valideringsSkema = z.object({
  name: z.string(
    "Hard to have a name without letters... Please use the alphabet for your name.",
  ),
  name: z
    .string()
    .min(
      2,
      "Please have a name with more than one letter",
    ),
  email: z.email(),
  comment: z
    .string()
    .max(
      100,
      "Say it with less words, please... No more than 100 characters!",
    ),
});

const CommentForm = ({ eventId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(valideringsSkema),
  });

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    /* AI HJALP MED DETTE: */
    // Se synopsis om AI brug: Forms //
    const result = await PostComment({
      eventId,
      name: data.name,
      email: data.email,
      comment: data.comment,
    });
    console.log("result:", result);
    /*************/
    reset();
    setMessage("Thank you for your comment!");
  };

  const [commentId, setCommentId] = useState("");
  const [commentName, setCommentName] =
    useState("");
  const [commentEmail, setCommentEmail] =
    useState("");
  const [commentContent, setCommentContent] =
    useState("");

  const updateCommentSection = () => {
    (setCommentId(commentId),
      setCommentName(commentName));
    setCommentEmail(commentEmail);
    setCommentContent(commentContent);
  };

  return (
    <section className="my-6">
      <h2 className="flex gap-1 text-(length:--font-h2) font-bold uppercase my-6">
        leave a comment
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-container flex flex-col w-(--form-width-big) gap-4"
      >
        <div className="input-wrapper flex gap-[1.3em]">
          <input
            {...register("name")}
            aria-label="input field for name"
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            className="border p-4 w-full"
          ></input>
          {errors.name && (
            <div>{errors.name.message}</div>
          )}
          <input
            {...register("email")}
            aria-label="input field for email"
            type="text"
            name="email"
            id="email"
            placeholder="Your email"
            className="border p-4 w-full"
          ></input>
          {errors.email && (
            <div>{errors.email.message}</div>
          )}
        </div>
        <div className="flex flex-col w-full">
          <textarea
            {...register("comment")}
            aria-label="input field for comment"
            type="text"
            name="comment"
            id="comment"
            placeholder="Your comment"
            className="border p-4 w-full h-[12em]"
          ></textarea>
          {errors.comment && (
            <div className="my-4 mx-4">
              {errors.comment.message}
            </div>
          )}
          <div className="ml-auto mt-5">
            <PrimaryButtons
              id="primarybtn"
              type="submit"
              textInput="submit"
              reset
              onClick={() => {
                updateCommentSection;
              }}
            />
          </div>
        </div>
        <div className="font-h3 font-bold mx-4">
          {message}
        </div>
      </form>
    </section>
  );
};

export default CommentForm;
