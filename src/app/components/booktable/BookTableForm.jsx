"use client";
import { useForm } from "react-hook-form";
import PrimaryButtons from "../buttons/PrimaryButtons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useEffect } from "react";
import { PostBooking } from "./PostBooking";

const valideringsSkema = z.object({
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
  phoneNumber: z
    .string()
    .length(
      8,
      "Please insert a danish phone number, 8 digits long.",
    ),
  tableNumber: z
    .string()
    .min(
      1,
      "Please select a table in the section above.",
    ),
  choiceNight: z
    .string()
    .min(1, "Please select an event"),
});

const tableCapacity = {
  small: 4,
  medium: 6,
  large: 8,
};

const BookTableForm = ({
  eventDate,
  events = [],
  selectedTable,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(valideringsSkema),
    defaultValues: {
      tableNumber:
        selectedTable?.number.toString() || "",
    },
  });

  /* AI HELPED WITH THIS FUNCTION: */
  // Se synopsis om AI brug: Book Table //

  useEffect(() => {
    const diffPageRoute =
      window.location.pathname;
    const eventId = diffPageRoute
      .split("/")
      .pop();
    if (eventId) {
      setValue("choiceNight", eventId);
    }
  }, [setValue]);
  /*  ********************** */

  useEffect(() => {
    if (selectedTable) {
      setValue(
        "tableNumber",
        selectedTable.number.toString(),
      );
    }
  }, [selectedTable, setValue]);

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    const selectedTableData = tableOptions.find(
      (tab) =>
        tab.number.toString() ===
        data.tableNumber,
    );
    if (
      selectedTableData &&
      data.guestsAmount >
        selectedTableData.capacity
    ) {
      setMessage(
        `This table is not big enough for the amount of guests you are booking for... Reduce the number of guests, and make several reservations instead.`,
      );
      reset();

      return;
    }
    /* AI HJALP MED DETTE: MEDTAG DATA FRA POST komponent */
    // Se synopsis om AI brug: Forms //
    const result = await PostBooking({
      name: data.name,
      email: data.email,
      tableNumber: data.tableNumber,
      guestsAmount: data.guestsAmount,
      choiceNight: data.choiceNight,
      phoneNumber: data.phoneNumber,
      eventDate: eventDate,
      bookingMessage: data.bookingMessage,
    });
    console.log("result:", result);
    /*************/

    if (result.success) {
      setMessage(
        "Thank you for submitting your booking!",
      );
    } else {
      setMessage(
        "Ooops! We failed to submit your booking...",
      );
    }
  };

  const tableOptions = Array.from(
    { length: 15 },
    (_, i) => {
      const tableNumber = i + 1;
      if ([3, 8, 13].includes(tableNumber))
        return {
          number: tableNumber,
          size: "medium",
          capacity: 6,
        };
      if ([5, 10, 15].includes(tableNumber))
        return {
          number: tableNumber,
          size: "large",
          capacity: 8,
        };
      return {
        number: tableNumber,
        size: "small",
        capacity: 4,
      };
    },
  );

  const [bookingName, setBookingName] =
    useState("");
  const [bookingEmail, setBookingEmail] =
    useState("");
  const [phoneNumber, setPhoneNumber] =
    useState("");
  const [tableNumber, setTableNumber] =
    useState("");
  const [guestsAmount, setGuestsAmount] =
    useState("");
  const [choiceNight, setChoiceNight] =
    useState("");

  const [bookingMessage, setBookingMessage] =
    useState("");
  const [bookingId, setBookingId] = useState("");

  const updateBookings = () => {
    setBookingName(bookingName);
    setBookingEmail(bookingEmail);
    setPhoneNumber(phoneNumber);
    setTableNumber(tableNumber);
    setGuestsAmount(guestsAmount);
    setChoiceNight(choiceNight);
    setBookingMessage(bookingMessage);
    setBookingId(bookingId);
  };

  return (
    <section
      id="book-table-form"
      className="form-container my-20"
    >
      <h1 className="text-(length:--font-h2) uppercase font-bold my-6 mx-4">
        book a table
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4"
        id="book-table-form"
      >
        <div className="input-wrapper flex gap-[1.3em] flex-wrap">
          <div className="flex flex-col">
            <input
              {...register("name")}
              aria-label="input field for name"
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="name-input border p-4"
            ></input>
            {errors.name && (
              <div className="text-alert">
                {errors.name.message}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <input
              {...register("email")}
              aria-label="input field for email"
              type="text"
              name="email"
              id="email"
              placeholder="Your email"
              className="email-input border p-4"
            ></input>
            {errors.email && (
              <div className="text-alert">
                {errors.email.message}
              </div>
            )}
          </div>
        </div>
        <div className="input-wrapper flex gap-[1.3em] flex-wrap">
          <div className="flex flex-col">
            <select
              {...register("tableNumber")}
              aria-label="view of selection of table"
              name="tableNumber"
              id="tableNumber"
              disabled
              placeholder="Table Number"
              className="table-input border border-(--pink) p-4 text-(--color-placeholderfont)"
            >
              <option value="">
                Please select a table above
              </option>
              {tableOptions.map((table) => (
                <option
                  key={table.number}
                  value={table.number}
                >
                  Table {table.number} (maximum of{" "}
                  {table.capacity} guests)
                </option>
              ))}
            </select>
            {errors.tableNumber && (
              <div className="text-alert">
                {errors.tableNumber.message}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <input
              {...register("guestsAmount")}
              aria-label="input field for amount of guests"
              type="number"
              name="guestsAmount"
              id="guestsAmount"
              placeholder="Number Of Guests"
              className="guests-input border p-4"
            ></input>
            {errors.guestsAmount && (
              <div className="text-alert">
                {errors.guestsAmount.message}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap">
          <select
            {...register("choiceNight")}
            aria-label="selection of night of event"
            /* AI HELPED WITH THIS SYNTAX: */
            // Se synopsis om AI brug: Book Table //
            onChange={(night) => {
              const selectedNight =
                night.target.value;
              if (selectedNight) {
                window.location.href = `/booktable/${selectedNight}`;
              }
            }}
            /* **************************** */
            name="choiceNight"
            id="choiceNight"
            className="border p-4 hidden text-(--color-placeholderfont)"
          >
            {events.map((event) => (
              <option
                key={event.id}
                value={event.id}
              >
                {new Date(
                  event.date,
                ).toLocaleString("en-UK", {
                  month: "long",
                  day: "numeric",
                })}{" "}
                - {event.title}
              </option>
            ))}
          </select>
          {errors.choiceNight && (
            <div className="text-alert">
              {errors.choiceNight.message}
            </div>
          )}
          <input
            {...register("phoneNumber")}
            aria-label="input field for phonenumber"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Your Contact Number"
            className="border p-4 w-(--form-width-big) "
          ></input>
          {errors.phoneNumber && (
            <div className="text-alert">
              {errors.phoneNumber.message}
            </div>
          )}
        </div>
        <div className="flex flex-col w-(--form-width-big)">
          <textarea
            {...register("bookingMessage")}
            aria-label="input field for message"
            type="text"
            name="bookingMessage"
            id="bookingMessage"
            placeholder="Your comment"
            className="border p-4 w-full h-[12em]"
          ></textarea>
          {errors.bookingMessage && (
            <div className="text-alert">
              {errors.bookingMessage.message}
            </div>
          )}
          <div className="ml-auto mt-5">
            <PrimaryButtons
              id="primarybtn"
              type="submit"
              textInput="submit"
              onClick={() => {
                updateBookings;
              }}
              reset
            ></PrimaryButtons>
          </div>
        </div>
        <div className="text-alert font-h3 place-self-center font-bold mx-4">
          {message}
        </div>
      </form>
    </section>
  );
};

export default BookTableForm;
