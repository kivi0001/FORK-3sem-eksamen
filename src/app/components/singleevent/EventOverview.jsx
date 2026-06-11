import Image from "next/image";
import PrimaryButtons from "../buttons/PrimaryButtons";
import Link from "next/link";

const EventOverview = ({
  imagesrc,
  alt,
  date,
  doorsOpen,
  startTime,
  location,
  category,
  price,
  ageRestriction,
  lineUp,
  schedule,
  content,
  id,
  title,
}) => {
  const newDate = new Date(date);
  let options = {
    month: "long",
    day: "numeric",
  };
  const actualDate = new Intl.DateTimeFormat(
    "en-UK",
    options,
  ).format(newDate);

  const newDoors = new Date(doorsOpen);
  let openOptions = {
    hour: "numeric",
    minute: "numeric",
  };
  const actualDoorsOpen = new Intl.DateTimeFormat(
    "en-UK",
    openOptions,
  ).format(newDoors);

  return (
    <section className="mt-small-medium singleview-section">
      <ul
        aria-label="Event times"
        className="singleview-info flex md:justify-center md:my-4 my-2 flex-wrap gap-small items-center"
      >
        <li className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            date:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {actualDate}
          </p>
          <span className="text-divider text-(length:--font-p) md:ml-1">
            |
          </span>
        </li>
        <li className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            doors open:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {actualDoorsOpen}
          </p>
          <span className="text-divider text-(length:--font-p) md:ml-1">
            |
          </span>
        </li>
        <li className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            event start:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {startTime}
          </p>
          <span className="text-divider text-(length:--font-p) md:ml-1">
            |
          </span>
        </li>
        <li className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            place:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {location}
          </p>
          <span className="text-divider text-(length:--font-p) md:ml-1">
            |
          </span>
        </li>
      </ul>
      <ul
        aria-label="Event details"
        className="singleview-info flex md:justify-center md:my-4 my-2 flex-wrap gap-small items-center"
      >
        <li className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            category:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {category}
          </p>
          <span className="text-divider text-(length:--font-p) md:ml-1">
            |
          </span>
        </li>
        <li className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            price:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {price}
          </p>
          <span className="text-divider text-(length:--font-p) md:ml-1">
            |
          </span>
        </li>
        <li className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            age:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {ageRestriction}
          </p>
          <span className="text-divider text-(length:--font-p) md:ml-1">
            |
          </span>
        </li>
        <li className="flex flex-row gap-2 md:justify-center items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p) shrink-0">
            schedule:
          </p>
          <select
            name="schedule"
            aria-label="schedule dropdown"
            defaultValue=""
            className="uppercase text-(length:--font-p) bg-transparent outline-none cursor-pointer max-w-36 min-w-0 w-full truncate"
          >
            <option
              className="disabled:text-formfont disabled:bg-(--select-background) focus:bg-background focus:text-formfont"
              value=""
              disabled
            >
              View schedule
            </option>
            {schedule.map((item, index) => (
              <option
                className="bg-background focus:bg-transparent text-foreground"
                key={index}
                value={item}
              >
                {item.time}: {item.label}
              </option>
            ))}
          </select>
          <span className="text-divider text-(length:--font-p) md:ml-1">
            |
          </span>
        </li>
        <li className="flex flex-row gap-2 md:justify-center items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p) shrink-0">
            lineup:
          </p>
          <select
            name="Lineup"
            aria-label="line-up dropdown"
            defaultValue=""
            className="uppercase text-(length:--font-p) bg-transparent outline-none cursor-pointer max-w-26 min-w-0 w-full truncate"
          >
            <option
              className="disabled:text-formfont disabled:bg-(--select-background) focus:bg-background focus:text-formfont"
              value=""
              disabled
            >
              View acts
            </option>
            {lineUp.map((act, index) => (
              <option
                className="bg-background text-foreground"
                key={index}
                value={act}
              >
                {act}
              </option>
            ))}
          </select>
        </li>
      </ul>
      <article className="singleview-content gap-small my-medium">
        <figure className="singleview-img w-full h-auto object-cover my-small">
          <Image
            src={imagesrc}
            alt={alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "70%",
            }}
          />
        </figure>
        <div className="singleview-textbox flex flex-col md:max-w-120 md:min-w-100">
          <div className="singleview-scrollbar max-h-100 overflow-y-scroll my-small md:pb-4 md:pl-6 pt-1 pb-4">
            <h2 className="singleview-headline text-(--pink) text-(length:--font-h3) uppercase font-medium mb-small tracking-(--letter-spacing-h1)">
              {title}
            </h2>
            <p className="singleview-text text-(length:--font-p) max-w-110 pr-small">
              {content}
            </p>
          </div>
          <div className="booktable-button mt-3 ml-auto mb-5 self-end">
            <Link href={`/booktable/${id}`}>
              <PrimaryButtons
                id="primarybtn"
                textInput="book now"
              />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default EventOverview;
