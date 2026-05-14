"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PrimaryButtons from "../../buttons/PrimaryButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const mailvalidation = z.object({
  email: z.email(),
});

const MailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mailvalidation),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-5"
    >
      <input
        {...register("email")}
        type="text"
        name="email"
        id=""
        placeholder="Enter your e-mail"
      />
      {errors.email && (
        <div>{errors.email.message}</div>
      )}
      <PrimaryButtons
        {...register("submitbtn")}
        type="submit"
        name="submitbtn"
        textInput={"Subscribe"}
      />
    </form>
  );
};

export default MailForm;
