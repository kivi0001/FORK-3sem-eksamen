"use client";

import {
  useRef,
  useState,
  useEffect,
} from "react";

const VideoComponent = ({ src }) => {
  const videoRef = useRef(null);
  return (
    <div className="video-container ">
      <div className="flex flex-col border-y-(--pink) border-y-2 ">
        <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-40 border-bs-0 border-e-0 border-be-40"></div>
        <video
          key={src}
          ref={videoRef}
          loading="lazy"
          playsInline
          autoPlay
          width={1200}
          controls
          muted
          className=""
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video.
        </video>
        <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
      </div>
    </div>
  );
};

export default VideoComponent;
