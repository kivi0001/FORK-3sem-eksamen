import HomeHeadlines from "../HomeHeadlines";
import { FeaturedSectionFetch } from "./FeaturedSectionFetch";

const FeaturedSection = ({ id }) => {
  return (
    <section className="featuredsection relative">
      <HomeHeadlines text="featured events" />
      <ul className="full-width-scroller">
        <FeaturedSectionFetch id={id} />
      </ul>
    </section>
  );
};

export default FeaturedSection;
