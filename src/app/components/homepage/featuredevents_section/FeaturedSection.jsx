import HomeHeadlines from "../HomeHeadlines";
import FeaturedEventsCard from "./FeaturedEventsCard";

const FeaturedSection = () => {
  return (
    <section>
      <HomeHeadlines text="featured events" />
      <div>
        <FeaturedEventsCard></FeaturedEventsCard>
      </div>
    </section>
  );
};

export default FeaturedSection;
