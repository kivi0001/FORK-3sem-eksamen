const VideoComponent = () => {
  return (
    <div className="video-container">
      <video
        loading="lazy"
        playsInline
        autoPlay
        width={1200}
      >
        <source
          src="/assets/media/video-crowd.mp4"
          type="video/mp4"
        />
        Your browser does not support the video.
      </video>
    </div>
  );
};

export default VideoComponent;
