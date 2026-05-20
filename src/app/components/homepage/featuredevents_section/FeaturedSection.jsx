import HomeHeadlines from "../HomeHeadlines";
import { FeaturedSectionFetch } from "./FeaturedSectionFetch";
import { Suspense } from "react";
const FeaturedSection = ({ id }) => {
  return (
    <section className="featuredsection relative mt-medium pb-medium">
      <HomeHeadlines text="featured events" />
      <Suspense>
        <ul className="full-width-scroller justify-center list-none p-0 w-full">
          <FeaturedSectionFetch id={id} />
        </ul>
      </Suspense>
    </section>
  );
};

export default FeaturedSection;
