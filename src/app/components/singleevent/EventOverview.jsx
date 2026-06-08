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
      <div className="singleview-info flex md:justify-center md:my-4 my-2 flex-wrap gap-small items-center">
        <div className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            date:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {actualDate}
          </p>
        </div>
        <div className="divider">
          <span className="text-divider text-(length:--font-p)">
            |
          </span>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            doors open:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {actualDoorsOpen}
          </p>
        </div>
        <div className="divider">
          <span className="text-divider text-(length:--font-p)">
            |
          </span>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            event start:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {startTime}
          </p>
        </div>
        <div className="divider">
          <span className="text-divider text-(length:--font-p)">
            |
          </span>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            place:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {location}
          </p>
          <span className="text-divider text-(length:--font-p)">
            |
          </span>
        </div>
      </div>
      <div className="singleview-info flex md:justify-center md:my-4 my-2 flex-wrap gap-small items-center">
        <div className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            category:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {category}
          </p>
        </div>
        <div className="divider">
          <span className="text-divider text-(length:--font-p)">
            |
          </span>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            price:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {price}
          </p>
        </div>
        <div className="divider">
          <span className="text-divider text-(length:--font-p)">
            |
          </span>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            age:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {ageRestriction}
          </p>
        </div>
        <div className="divider">
          <span className="text-divider text-(length:--font-p)">
            |
          </span>
        </div>
        <div className="flex flex-row gap-2 md:justify-center items-center max-w-auto">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            schedule:
          </p>
          <select
            name="schedule"
            aria-label="schedule dropdown"
            defaultValue=""
            className="uppercase text-(length:--font-p) bg-transparent border-none outline-none cursor-pointer max-w-35"
          >
            <option value="" disabled>
              View schedule
            </option>
            {schedule.map((item, index) => (
              <option key={index} value={item}>
                {item.time}: {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-row gap-2 md:justify-center items-center max-w-auto">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            lineup:
          </p>
          <select
            name="Lineup"
            aria-label="line-up dropdown"
            defaultValue=""
            className="uppercase text-(length:--font-p) bg-transparent border-none outline-none cursor-pointer max-w-25"
          >
            <option value="" disabled>
              View acts
            </option>
            {lineUp.map((act, index) => (
              <option key={index} value={act}>
                {act}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="singleview-content gap-small my-medium">
        <div className="singleview-img w-full h-auto object-cover my-small">
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
        </div>
        <div className="singleview-textbox flex flex-col md:max-w-120 md:min-w-100">
          <div className="singleview-scrollbar max-h-100 overflow-y-scroll my-small md:pb-4 md:pl-6 pt-1 pb-4">
            <h3 className="singleview-headline text-(--pink) text-(length:--font-h3) uppercase font-medium mb-small tracking-(--letter-spacing-h1)">
              {title}
            </h3>
            <p className="singleview-text text-(length:--font-p) max-w-110 pr-small">
              {content}
            </p>
          </div>
          <div className="mt-3 ml-auto mb-5 self-end">
            <Link href={`/booktable/${id}`}>
              <PrimaryButtons
                id="primarybtn"
                textInput="book now"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;
