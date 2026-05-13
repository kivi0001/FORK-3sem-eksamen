"use client";

import { useRef } from "react";

const VideoComponent = ({ src }) => {
  const videoRef = useRef(null);
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-60 border-bs-0 border-e-0 border-be-60 relative top-15"></div>
        <video
          key={src}
          ref={videoRef}
          loading="lazy"
          playsInline
          width={1080}
          controls
          muted
          title="video player"
          disablePictureInPicture
          className=""
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video.
        </video>
        <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-60 border-e-60 border-be-0 relative bottom-15"></div>
      </div>
    </div>
  );
};

export default VideoComponent;
