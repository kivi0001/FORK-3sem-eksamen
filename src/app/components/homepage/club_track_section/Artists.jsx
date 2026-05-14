import Image from "next/image";

const Artists = () => {
  return (
    <ul className="artists-scroller">
      <li className="artist-image-hover">
        <button className="artist-track relative cursor-pointer">
          <Image
            className="object-cover"
            src="/assets/content-img/track1.jpg"
            alt="image of artist"
            width={300}
            height={300}
          />

          <div className="track-active-overlay inset-0 flex flex-col">
            <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-40 border-bs-0 border-e-0 border-be-40"></div>
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
            <p className="text-center mt-5 uppercase">
              Black Box Funky
            </p>
            <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
          </div>
        </button>
      </li>

      <li className="artist-image-hover">
        <button className="artist-track relative cursor-pointer">
          <Image
            className="object-cover"
            src="/assets/content-img/track2.jpg"
            alt="image of artist"
            width={300}
            height={300}
          />

          <div className="track-active-overlay inset-0 flex flex-col">
            <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-40 border-bs-0 border-e-0 border-be-40"></div>
            <div className="flex flex-col items-center mt-auto">
              <button className="play-button cursor-pointer">
                <Image
                  src="/assets/icon/Play_btn.svg"
                  alt="a play button"
                  width={35}
                  height={35}
                />
              </button>
            </div>
            <p className="text-center mt-5 uppercase">
              Euphoria
            </p>
            <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
          </div>
        </button>
      </li>

      <li className="artist-image-hover">
        <button className="artist-track relative cursor-pointer">
          <Image
            className="object-cover"
            src="/assets/content-img/track3.jpg"
            alt="image of artist"
            width={300}
            height={300}
          />

          <div className="track-active-overlay inset-0 flex flex-col">
            <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-40 border-bs-0 border-e-0 border-be-40"></div>
            <div className="flex flex-col items-center mt-auto">
              <button className="play-button cursor-pointer">
                <Image
                  src="/assets/icon/Play_btn.svg"
                  alt="a play button"
                  width={35}
                  height={35}
                />
              </button>
            </div>
            <p className="text-center mt-5 uppercase">
              Fashion Red Tape
            </p>
            <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
          </div>
        </button>
      </li>
      <li className="artist-image-hover">
        <button className="artist-track relative cursor-pointer">
          <Image
            className="object-cover"
            src="/assets/content-img/track4.jpg"
            alt="image of artist"
            width={300}
            height={300}
          />

          <div className="track-active-overlay inset-0 flex flex-col">
            <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-40 border-bs-0 border-e-0 border-be-40"></div>
            <div className="flex flex-col items-center mt-auto">
              <button className="play-button cursor-pointer">
                <Image
                  src="/assets/icon/Play_btn.svg"
                  alt="a play button"
                  width={35}
                  height={35}
                />
              </button>
            </div>
            <p className="text-center mt-5 uppercase">
              Neon Nanny
            </p>
            <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
          </div>
        </button>
      </li>
      <li className="artist-image-hover">
        <button className="artist-track relative cursor-pointer">
          <Image
            className="object-cover"
            src="/assets/content-img/track5.jpg"
            alt="image of artist"
            width={300}
            height={300}
          />

          <div className="track-active-overlay inset-0 flex flex-col">
            <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-40 border-bs-0 border-e-0 border-be-40"></div>
            <div className="flex flex-col items-center mt-auto">
              <button className="play-button cursor-pointer">
                <Image
                  src="/assets/icon/Play_btn.svg"
                  alt="a play button"
                  width={35}
                  height={35}
                />
              </button>
            </div>
            <p className="text-center mt-5 uppercase">
              Overload
            </p>
            <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
          </div>
        </button>
      </li>
    </ul>
  );
};

export default Artists;
