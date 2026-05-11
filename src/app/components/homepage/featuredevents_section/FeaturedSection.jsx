import HomeHeadlines from "../HomeHeadlines";
import { FeaturedSectionFetch } from "./FeaturedSectionFetch";
import Image from "next/image";

const FeaturedSection = () => {
  return (
    <section className="featuredsection relative">
      <HomeHeadlines text="featured events" />
      <ul className="full-width-scroller">
        <FeaturedSectionFetch />
      </ul>
    </section>
  );
};

export default FeaturedSection;
