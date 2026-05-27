import HomeHeadlines from "../HomeHeadlines";
import VideoContainer from "./VideoContainer";

const LatestVideoSection = () => {
  return (
    <section className="video-section">
      <HomeHeadlines text="Latest Video" />
      <VideoContainer />
    </section>
  );
};

export default LatestVideoSection;
