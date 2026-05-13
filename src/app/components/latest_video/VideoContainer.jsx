"use client";

import { useState } from "react";
import VideoComponent from "./VideoComponent";

export default function VideoContainer() {
  const videoPlaylist = [
    "/assets/media/video-crowd.mp4",
    "/assets/media/video-dj-crowd1.mp4",
  ];

  const [
    currentVideoIndex,
    setCurrentVideoIndex,
  ] = useState(0);

  const previousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0
        ? videoPlaylist.length - 1
        : prevIndex - 1,
    );
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoPlaylist.length - 1
        ? 0
        : prevIndex + 1,
    );
  };

  return (
    <div>
      <button onClick={previousVideo}>◀</button>
      <VideoComponent
        src={videoPlaylist[currentVideoIndex]}
      />
      <div>
        <button onClick={nextVideo}>▶</button>
      </div>
    </div>
  );
}
