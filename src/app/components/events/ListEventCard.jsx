import { main } from "framer-motion/client";
import PrimaryButtons from "../buttons/PrimaryButtons";

const SingleEventCard = ({
  date,
  title,
  description,
  imagesrc,
  alt,
  location,
}) => {
  return (
    <main>
      <div className="events-grid">
        <img
          src={imagesrc}
          alt={alt}
          className="fullbleed-events"
        />
        <h3>{title}</h3>
        <h2>
          {date}
          <span>|</span>
          <span>{location}</span>
        </h2>
        <p>{description}</p>
        <p>{alt}</p>
        <PrimaryButtons textInput="read more" />
      </div>
    </main>
  );
};

export default SingleEventCard;
