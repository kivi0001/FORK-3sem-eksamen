"use client";

import { useRef } from "react";

const VideoComponent = ({ src }) => {
  const videoRef = useRef(null);
  return (
    <>
      <div className="relative left-0 right-0">
        <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-60 border-bs-0 border-e-0 border-be-60 absolute top-0 left-0"></div>
        <video
          key={src}
          ref={videoRef}
          loading="lazy"
          playsInline
          width={1080}
          height={700}
          controls
          muted
          title="video player"
          disablePictureInPicture
          className=""
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video.
        </video>{" "}
        <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-60 border-e-60 border-be-0 absolute bottom-0 right-0"></div>
      </div>
    </>
  );
};

export default VideoComponent;
