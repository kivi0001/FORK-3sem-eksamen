import HomeHeadlines from "../HomeHeadlines";
import { FeaturedSectionFetch } from "./FeaturedSectionFetch";
import Image from "next/image";

const FeaturedSection = () => {
  return (
    <section className="featuredsection relative">
      <div className="">
        <HomeHeadlines text="featured events" />
        <div className="flex gap-4">
          <FeaturedSectionFetch />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
