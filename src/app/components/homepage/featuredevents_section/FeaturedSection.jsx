import HomeHeadlines from "../HomeHeadlines";
import { FeaturedSectionFetch } from "./FeaturedSectionFetch";
import Image from "next/image";

const FeaturedSection = () => {
  return (
    <section className="featuredsection relative">
      <HomeHeadlines text="featured events" />
      <div className="flex gap-4">
        <FeaturedSectionFetch />
      </div>
    </section>
  );
};

export default FeaturedSection;
