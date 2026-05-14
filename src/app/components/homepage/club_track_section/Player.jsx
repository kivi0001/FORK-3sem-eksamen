"use Client";
import { useRef } from "react";

import { FaFastForward } from "react-icons/fa";
import { FaFastBackward } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";
import { FaVolumeUp } from "react-icons/fa";

const Player = ({
  audioElem,
  isPlaying,
  setisPlaying,
  currentSong,
  setCurrentSong,
  songs,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setisPlaying(!isPlaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const audioprogress = (offset / width) * 100;
    audioElem.current.currentTime =
      (audioprogress / 100) * currentSong.length;
  };

  const prevSong = () => {
    const index = songs.findIndex(
      (x) => x.title == currentSong.title,
    );
    if (index == 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const nextSong = () => {
    const index = songs.findIndex(
      (x) => x.title == currentSong.title,
    );

    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  return (
    <div className="music-container">
      <div className="title">
        <p>{currentSong.title}</p>
      </div>
      <div className="navigation">
        <div
          className="navigation-wrapper"
          onClick={checkWidth}
          ref={clickRef}
        >
          <div
            className="progress-bar"
            style={{
              width: `${currentSong.progress + "%"}`,
            }}
          ></div>
        </div>
      </div>
      <div className="controls">
        <FaFastBackward
          className="btn-prevnext"
          onClick={prevSong}
        />
        {isPlaying ? (
          <FaRegCirclePause
            className="btn-playpause"
            onClick={PlayPause}
          />
        ) : (
          <FaRegCirclePlay
            className="btn-playpause"
            onClick={PlayPause}
          />
        )}
        <FaFastForward
          className="btn-prevnext"
          onClick={nextSong}
        />
        <FaVolumeUp />
      </div>
    </div>
  );
};

export default Player;
