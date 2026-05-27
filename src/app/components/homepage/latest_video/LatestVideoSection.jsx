import HomeHeadlines from "../HomeHeadlines";
import { Suspense } from "react";
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
