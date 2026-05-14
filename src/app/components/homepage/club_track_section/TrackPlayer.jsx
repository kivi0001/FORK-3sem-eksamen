"use client";
import Player from "./Player";
import {
  useRef,
  useState,
  useEffect,
} from "react";

const songsdata = [
  {
    title: "Black Box Funky",
    src: "/assets/media/black-box-funky.mp3",
  },
  {
    title: "Euphoria",
    src: "/assets/media/euphoria.mp3",
  },
  {
    title: "Fashion Red Tape",
    src: "/assets/media/fashion-red-tape.mp3",
  },
  {
    title: "Neon Nanny",
    src: "/assets/media/fashion-red-tape.mp3",
  },
  {
    title: "Overload",
    src: "/assets/media/euphoria.mp3",
  },
];

const TrackPlayer = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isPlaying, setisPlaying] =
    useState(false);
  const [currentSong, setCurrentSong] = useState(
    songsdata[0],
  );

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying, currentSong]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const cTime = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (cTime / duration) * 100,
      length: duration,
    });
  };

  return (
    <div className="track-player">
      <audio
        src={currentSong.src}
        ref={audioElem}
        onTimeUpdate={onPlaying}
      />
      <Player
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setisPlaying={setisPlaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};

export default TrackPlayer;
