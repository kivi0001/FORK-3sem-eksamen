"use client";
import Image from "next/image";

const artistImages = {
  "Black Box Funky":
    "/assets/content-img/track1.jpg",
  Euphoria: "/assets/content-img/track2.jpg",
  "Fashion Red Tape":
    "/assets/content-img/track3.jpg",
  "Neon Nanny": "/assets/content-img/track4.jpg",
  Overload: "/assets/content-img/track5.jpg",
};

const Artists = ({
  songs = [],
  setCurrentSong,
  setisPlaying,
}) => {
  const handleSongChoice = (song) => {
    setCurrentSong(song);
    setisPlaying(true);
  };

  return (
    <ul className="artists-scroller  flex flex-row w-full p-0 m-0 list-none overflow-y-hidden">
      {songs?.map((song, index) => (
        <li
          key={index}
          className="artist-image-hover w-full h-full relative"
        >
          <div
            className="artist-track relative max-w-47.5 max-h-47.5 cursor-pointer"
            onClick={() => handleSongChoice(song)}
          >
            <Image
              className="object-cover"
              src={
                artistImages[song.title] ||
                "/assets/content-img/track1.jpg"
              }
              alt={`image of ${song.title}`}
              width={200}
              height={200}
            />

            <div className="track-active-overlay absolute inset-0 flex flex-col bg-black/40 transition-opacity duration-200">
              <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-20 border-bs-0 border-e-0 border-be-20"></div>
              <div className="flex flex-col items-center mt-auto">
                <button className="play-button cursor-pointer p-4 relative z-1">
                  <Image
                    src="/assets/icon/Play_btn.svg"
                    alt="a play button"
                    width={35}
                    height={35}
                  />
                </button>
              </div>
              <p className="text-center mt-1 uppercase">
                {song.title}
              </p>
              <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-20 border-e-20 border-be-0 w-0 h-0 self-end"></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Artists;
