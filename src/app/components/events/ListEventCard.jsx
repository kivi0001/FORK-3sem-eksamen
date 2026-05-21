import PrimaryButtons from "../buttons/PrimaryButtons";
import Link from "next/link";

const ListEventCard = ({
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
    <section className="events-wrapper mt-medium">
      <div className="events-wrapper-content flex gap-x-5">
        <div className="fullbleed-eventsimg">
          <img src={imagesrc} alt={alt} />
        </div>
        <div className="events-content flex flex-col w-fit">
          <h2 className="uppercase text-foreground mb-2 font-(--font-weight-h2) text-(length:--font-h2)">
            {title}
          </h2>
          <h3 className="text-info text-(length:--font-h3)">
            {actualDate}
            <span className="text-divider">
              {" "}
              |{" "}
            </span>
            <span className="uppercase text-foreground font-(--font-weight-h2)">
              {location}
            </span>
          </h3>
          <p className="text-bodyfont text-(length:--font-table-p) tracking-(--letter-spacing-p) mt-6 leading-7">
            {description}
          </p>
          <div className="mt-auto ml-auto">
            <Link href={`/singleevent/${slug}`}>
              <PrimaryButtons textInput="Read More"></PrimaryButtons>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListEventCard;
