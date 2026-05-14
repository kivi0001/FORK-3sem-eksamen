"use client";
import { useForm } from "react-hook-form";
import PrimaryButtons from "../buttons/PrimaryButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const valideringsSkema = z.object({
  name: z.string().min(2),
});

const CommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(valideringsSkema),
  });

  const [message, setMessage] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    setMessage("Tak!");
  };
  return (
    <section>
      <h2>leave a comment</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("name")}
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
          ></input>
          {errors.name && (
            <div>{errors.name.message}</div>
          )}
          <input
            {...register("email", {
              required: true,
            })}
            type="text"
            name="email"
            id="email"
            placeholder="Your email"
          ></input>
        </div>
        <textarea
          {...register("comment", {
            required: true,
          })}
          type="text"
          name="comment"
          id="comment"
          placeholder="Your comment"
        ></textarea>
        <PrimaryButtons
          type="submit"
          textInput="submit"
        ></PrimaryButtons>
      </form>
    </section>
  );
};

export default CommentForm;
