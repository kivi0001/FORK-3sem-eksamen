import PrimaryButtons from "../buttons/PrimaryButtons";

const SingleEventCard = ({
  date,
  title,
  description,
  imagesrc,
  alt,
}) => {
  return (
    <div>
      <img src={imagesrc} alt={alt} />
      <h3>{title}</h3>
      <h2>
        {date}
        <span>|</span>
        <span></span>
      </h2>
      <p>{description}</p>
      <p>{alt}</p>
      <PrimaryButtons />
    </div>
  );
};

export default SingleEventCard;
