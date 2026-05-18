"use client";
import { useForm } from "react-hook-form";
import PrimaryButtons from "../buttons/PrimaryButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const phone = z.e164();

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
  guestsAmount: z
    .number()
    .gte(
      1,
      "Please insert a number bewteen 1-8 guests",
    ),
  guestsAmount: z
    .number()
    .lte(
      8,
      "Please insert a number bewteen 1-8 guests",
    ),
  phoneNumber: phone.parse("+45"),
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
        className="flex flex-col justify-center items-center gap-4"
      >
        <div></div>
      </form>
    </section>
  );
};

export default BookTableForm;
