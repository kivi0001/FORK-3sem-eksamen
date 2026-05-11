import PrimaryButtons from "../../buttons/PrimaryButtons";

const Gallery = ({
  imagesrc,
  alt,
  descprition,
}) => {
  return (
    <>
      <div>
        <img src={imagesrc} alt={descprition} />
      </div>
      <div>
        <p>{alt}</p>
        <PrimaryButtons textInput={"read more"} />
      </div>
    </>
  );
};

export default Gallery;
