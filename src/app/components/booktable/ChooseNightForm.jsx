"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const valideringsSkema = z.object({
  choiceNight: z
    .string()
    .min(1, "Please select an event"),
});

const ChooseNightForm = ({ events = [] }) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(valideringsSkema),
    defaultValues: {
      choiceNight: "",
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
  return (
    <section className="night-container flex justify-center">
      <form className="night-form flex flex-col gap-2 w-(--form-width-small)">
        <label
          htmlFor="choiceNight"
          className="uppercase text-(length:--font-p) font-bold"
        >
          Choice of Night:
        </label>
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
          className="cursor-pointer border border-(--pink) p-4 text-(--color-placeholderfont)"
        >
          <option value="" disabled>
            Please select a night
          </option>
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
          <div>{errors.choiceNight.message}</div>
        )}
      </form>
    </section>
  );
};

export default ChooseNightForm;
