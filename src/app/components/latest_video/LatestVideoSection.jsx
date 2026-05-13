import HomeHeadlines from "../homepage/HomeHeadlines";
import VideoComponent from "./VideoComponent";
import { Suspense } from "react";

const LatestVideo = () => {
  return (
    <section>
      <HomeHeadlines text="Latest Video" />
      <Suspense
        fallback={<p>Loading videos..</p>}
      >
        <VideoComponent />
      </Suspense>
    </section>
  );
};

export default LatestVideo;
