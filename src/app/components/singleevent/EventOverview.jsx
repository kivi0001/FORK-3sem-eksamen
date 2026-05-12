import Image from "next/image";
import PrimaryButtons from "../buttons/PrimaryButtons";

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
  description,
}) => {
  return (
    <section>
      <div>
        <Image
          src={imagesrc}
          alt={alt}
          width={1000}
          height={800}
        />
      </div>
      <div>
        <div>
          <p>date:</p>
          <p>{date}</p>
        </div>
        <div>
          <p>doors open:</p>
          <p>{doorsOpen}</p>
        </div>
        <div>
          <p>event start:</p>
          <p>{startTime}</p>
        </div>
        <div>
          <p>place:</p>
          <p>{location}</p>
        </div>
        <div>
          <p>category</p>
          <p>{category}</p>
        </div>
      </div>
      <div>
        <div>
          <p>price:</p>
          <p>{price} kr.</p>
        </div>
        <div>
          <p>age:</p>
          <p>{ageRestriction}+</p>
        </div>
        <div>
          <p>schedule:</p>
          <p>{schedule}</p>
        </div>
        <div>
          <p>lineup:</p>
          <p>{lineUp}</p>
        </div>
      </div>
      <div>
        <p>{description}</p>
        <PrimaryButtons textInput="book now" />
      </div>
    </section>
  );
};

export default EventOverview;
