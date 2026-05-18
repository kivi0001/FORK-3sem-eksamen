"use client";
import { useForm } from "react-hook-form";
import PrimaryButtons from "../buttons/PrimaryButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

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
  bookingMessage: z
    .string()
    .max(
      100,
      "Say it with less words, please... No more than 100 characters!",
    ),
  guestsAmount: z.coerce
    .number()
    .gte(
      1,
      "Please insert a number bewteen 1-8 guests",
    )
    .lte(
      8,
      "Please insert a number bewteen 1-8 guests",
    ),
  phoneNumber: z.e164("+45"),
  phoneNumber: z
    .string()
    .length(
      8,
      "Please insert a danish phone number, 8 digits long.",
    ),
});

const BookTableForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(valideringsSkema),
  });

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    /* AI HJALP MED DETTE: MEDTAG DATA FRA POST komponent */
    /*     const result = await PostBookingInfo({
      name: data.name,
      email: data.email,
      contactMessage: data.contactMessage,
    });
    console.log("result:", result); */
    /*************/

    setMessage(
      "Thank you for submitting your message!",
    );
  };

  /*     const [contactDate, setContactDate] =
    useState("");
  const [contactId, setContactId] = useState("");
  const [contactName, setContactName] =
    useState("");
  const [contactEmail, setContactEmail] =
    useState("");
  const [contactMessage, setContactMessage] =
    useState("");

  const updateContact = () => {
    setContactDate(contactDate);
    setContactId(contactId);
    setContactName(contactName);
    setContactEmail(contactEmail);
    setContactMessage(contactMessage);
  };
 */

  return (
    <section className="my-20">
      <h1 className="text-(length:--font-h1) uppercase font-bold">
        book a table
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-4 "
      >
        <div className="flex gap-[1em] w-[90%] flex-wrap">
          <input
            {...register("name")}
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
        <div className="flex gap-[1em] w-[90%] flex-wrap">
          <select
            {...register("tableNumber")}
            name="tableNumber"
            id="tableNumber"
            placeholder="Table Number"
            className="border p-4 w-full text-(--color-placeholderfont)"
          >
            <option value="">Table Number</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
          {errors.tableNumber && (
            <div>
              {errors.tableNumber.message}
            </div>
          )}
          <input
            {...register("guestsAmount")}
            type="number"
            name="guestsAmount"
            id="guestsAmount"
            placeholder="Number Of Guests"
            className="border p-4 w-full"
          ></input>
          {errors.guestsAmount && (
            <div>
              {errors.guestsAmount.message}
            </div>
          )}
        </div>
        <div className="flex gap-[1em] w-[90%] flex-wrap">
          <select
            {...register("choiceNight")}
            name="choiceNight"
            id="choiceNight"
            placeholder="Choose Night"
            className="border p-4 w-full text-(--color-placeholderfont)"
          >
            <option
              className="text-(--color-formfont)"
              value=""
            >
              Choose Night
            </option>
            <option value="1">{}</option>

            {/* make dynamic options of nights here */}
          </select>
          {errors.choiceNight && (
            <div>
              {errors.choiceNight.message}
            </div>
          )}
          <input
            {...register("phoneNumber")}
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Your Contact Number"
            className="border p-4 w-full"
          ></input>
          {errors.phoneNumber && (
            <div>
              {errors.phoneNumber.message}
            </div>
          )}
        </div>
        <div className="flex w-[90%] flex-col">
          <textarea
            {...register("bookingMessage")}
            type="text"
            name="bookingMessage"
            id="bookingMessage"
            placeholder="Your comment"
            className="border p-4 w-full h-[12em]"
          ></textarea>
          {errors.bookingMessage && (
            <div className="my-4 mx-4">
              {errors.bookingMessage.message}
            </div>
          )}
          <div className="ml-auto mt-5">
            <PrimaryButtons
              type="submit"
              textInput="submit"
              onClick={() => {
                updateBooking;
              }}
            ></PrimaryButtons>
          </div>
        </div>
        <div className="font-h3 font-bold mx-4">
          {message}
        </div>
      </form>
    </section>
  );
};

export default BookTableForm;
