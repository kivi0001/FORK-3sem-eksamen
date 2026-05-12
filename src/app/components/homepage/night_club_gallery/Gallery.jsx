import PrimaryButtons from "../../buttons/PrimaryButtons";

const Gallery = ({
  imagesrc,
  alt,
  descprition,
}) => {
  return (
    <>
      <div className="gallery-wrapper gallery-hover relative">
        <div className="gallery-container">
          <div className="flex flex-col gallery-overlay border-y-(--pink) border-y-2">
            <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-40 border-bs-0 border-e-0 border-be-40"></div>
            <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
          </div>
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
