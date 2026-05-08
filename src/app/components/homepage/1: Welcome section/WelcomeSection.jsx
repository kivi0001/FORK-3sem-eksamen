import HomeHeadlines from "../HomeHeadlines";
import WelcomeCard from "./WelcomeCard";

const WelcomeSection = () => {
  return (
    <section className="welcome flex flex-col items-center justify-center ">
      <HomeHeadlines text="welcome in nightclub" />
      <div className="welcome-image-div w-full flex justify-center gap-8">
        <WelcomeCard
          link="/assets/content-img/thumb1.jpg"
          iconlink=""
          theme="nightclub"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, ex!"
        />
        <WelcomeCard
          link="/assets/content-img/reastaurant_1.jpg"
          iconlink=""
          theme="restaurant"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, ex!"
        />
        <WelcomeCard
          link="/assets/content-img/thumb2.jpg"
          iconlink=""
          theme="bar"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, ex!"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
