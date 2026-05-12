import HomeHeadlines from "../HomeHeadlines";
import { GalleryInfo } from "./GalleryInfo";

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <HomeHeadlines text="Night Club Callery" />
      <div className="gallery-img-wrapper">
        <GalleryInfo />
      </div>
    </section>
  );
};

export default GallerySection;
