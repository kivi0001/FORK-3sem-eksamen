import PrimaryButtons from "../buttons/PrimaryButtons";
import Link from "next/link";

const SingleEventCard = ({
  date,
  title,
  description,
  imagesrc,
  alt,
  location,
  slug,
}) => {
  const newDate = new Date(date);
  let options = {
    hour: "numeric",
    minute: "numeric",
    month: "long",
    day: "numeric",
  };
  const actualDate = new Intl.DateTimeFormat(
    "en-UK",
    options,
  ).format(newDate);
  return (
    <div className="events-wrapper ">
      <div className="events-wrapper-content">
        <div className="fullbleed-eventsimg">
          <img src={imagesrc} alt={alt} />
        </div>
        <div className="events-content">
          <h2 className="uppercase text-foreground">
            {title}
          </h2>
          <h3 className="text-info">
            {actualDate}
            <span className="text-divider">
              {" "}
              |{" "}
            </span>
            <span className="uppercase text-foreground">
              {location}
            </span>
          </h3>
          <p className="text-bodyfont text-font-p tracking-(--letter-spacing-p) leading-6">
            {description}
          </p>
          <Link href={`/singleevent/${slug}`}>
            <PrimaryButtons textInput="read more"></PrimaryButtons>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleEventCard;
