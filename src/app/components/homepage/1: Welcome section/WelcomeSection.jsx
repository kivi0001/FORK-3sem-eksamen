import HomeHeadlines from "./HomeHeadlines";
import WelcomeCard from "./WelcomeCard";

const WelcomeSection = ({ text }) => {
  return (
    <section>
      <HomeHeadlines text="Welcome" />
      <div>
        <WelcomeCard />
        <WelcomeCard />
        <WelcomeCard />
      </div>
    </section>
  );
};

export default WelcomeSection;
