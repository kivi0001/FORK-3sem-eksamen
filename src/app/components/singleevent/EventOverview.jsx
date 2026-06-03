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
        {/* <div className="flex flex-row gap-2 md:justify-center items-start">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            schedule:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {schedule}
          </p>
        </div>
        <div className="divider">
          <span className="text-divider text-(length:--font-p)">
            |
          </span>
        </div> */}
        <div className="flex flex-row gap-2 md:justify-center items-start">
          <p className="uppercase text-(--pink) font-bold text-(length:--font-p)">
            lineup:
          </p>
          <p className="uppercase text-(length:--font-p)">
            {lineUp}
          </p>
        </div>
      </div>
      <div className="singleview-content gap-small my-small-medium">
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
          <div className="singleview-scrollbar max-h-100 overflow-y-scroll my-small">
            <p className="singleview-text text-(length:--font-p) max-w-110 md:pb-4 md:pl-6 py-4">
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
