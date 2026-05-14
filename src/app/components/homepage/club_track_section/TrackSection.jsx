import HomeHeadlines from "../HomeHeadlines";
import TrackPlayer from "./TrackPlayer";
import Artists from "./Artists";

const TrackSection = () => {
  return (
    <section>
      <HomeHeadlines text="night club track" />
      <TrackPlayer />
      <Artists />
    </section>
  );
};

export default TrackSection;
