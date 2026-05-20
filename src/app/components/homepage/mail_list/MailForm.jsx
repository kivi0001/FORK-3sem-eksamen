"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PrimaryButtons from "../../buttons/PrimaryButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostMailInfo } from "./PostMailInfo";

const mailvalidation = z.object({
  email: z.email(),
  emailMessage: z.string(
    "E-mail already exists in our system!",
  ),
});

const MailForm = () => {
  // const [isSubscribed, setIsSubscribed] =
  //   useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mailvalidation),
  });

  // useEffect(() => {
  //   if (!isSubscribed) return;

  //   const timer = setTimeout(() => {
  //     setIsSubscribed(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [isSubscribed]);

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    const result = await PostMailInfo({
      email: data.email,
    });

    if (result.success) {
      setMessage(
        "Thank you for subscribing to our newsletter!",
      );
      reset();
    } else {
      setMessage(
        "Subscription failed! Please try again.",
      );
    }
    console.log("data", data);
  };

  const [email, setEmail] = useState("");

  const updateNewsletter = () => {
    setEmail(email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap gap-5 place-content-center"
    >
      {errors.email && (
        <div className="text-alert self-center">
          {errors.email.message}
        </div>
      )}
      <input
        {...register("email")}
        type="text"
        name="email"
        id="email"
        placeholder="Enter your e-mail"
        className="outline-none text-foreground placeholder-foreground border-b-2 p-2 tracking-(--letter-spacing-input) w-80 focus:bg-input-bg"
      />
      <PrimaryButtons
        type="submit"
        textInput={"Subscribe"}
        onClick={() => {
          updateNewsletter;
        }}
      />
      {/* {isSubscribed && (
        <div className="self-center text-validation">
          You have subscribed!
        </div>
      )} */}
      <div>{message}</div>
    </form>
  );
};

export default MailForm;
