"use client";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import PrimaryButtons from "../../buttons/PrimaryButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const mailvalidation = z.object({
  email: z.email(),
});

const MailForm = () => {
  const [isSubscribed, setIsSubscribed] =
    useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mailvalidation),
  });

  useEffect(() => {
    if (!isSubscribed) return;

    const timer = setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isSubscribed]);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubscribed(true);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap gap-5 place-content-center"
    >
      <input
        {...register("email")}
        type="text"
        name="email"
        id=""
        placeholder="Enter your e-mail"
        className="outline-none text-foreground placeholder-foreground border-b-2 p-2 tracking-(--letter-spacing-input) w-80 focus:bg-input-bg"
      />
      <PrimaryButtons
        {...register("submitbtn")}
        type="submit"
        name="submitbtn"
        textInput={"Subscribe"}
      />
      {isSubscribed && (
        <div className="self-center text-validation">
          You have subscribed!
        </div>
      )}
      {errors.email && (
        <div className="text-alert self-center">
          {errors.email.message}
        </div>
      )}
    </form>
  );
};

export default MailForm;
