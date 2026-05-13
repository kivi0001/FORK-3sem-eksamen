"use client";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

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
    <div className="video-container place-items-center mb-20">
      <VideoComponent
        src={videoPlaylist[currentVideoIndex]}
      />
      <div className="flex justify-center gap-x-6">
        <button
          onClick={previousVideo}
          className="py-2 px-2 text-white border"
        >
          <BiSolidLeftArrow size={25} />
        </button>
        <button
          onClick={nextVideo}
          className="py-2 px-2 text-white border"
        >
          <BiSolidRightArrow size={25} />
        </button>
      </div>
    </div>
  );
}
