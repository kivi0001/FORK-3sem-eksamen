import HomeHeadlines from "../HomeHeadlines";
import TrackPlayer from "./TrackPlayer";
import Artists from "./ArtistContainer";
import { Suspense } from "react";

const TrackSection = () => {
  return (
    <section className="track-container">
      <HomeHeadlines text="night club track" />
      <Suspense fallback="Could not load Night Club Track player..">
        <TrackPlayer />
        <Artists />
      </Suspense>
    </section>
  );
};

export default TrackSection;
