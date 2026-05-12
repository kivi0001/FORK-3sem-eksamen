import PrimaryButtons from "../../buttons/PrimaryButtons";

const Gallery = ({
  imagesrc,
  alt,
  descprition,
}) => {
  return (
    <>
      <div className="gallery-wrapper">
        <div className="gallery-container">
          <img src={imagesrc} alt={descprition} />
        </div>
        <div className="hidden">
          <p>{alt}</p>
          <PrimaryButtons
            textInput={"read more"}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
