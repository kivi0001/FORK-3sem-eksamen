"use client";
import Image from "next/image";
import Link from "next/link";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

const FeaturedEventsCard = ({
  date,
  title,
  description,
  imagesrc,
  alt,
  location,
  id,
  index,
}) => {
  /* AI HELPED WITH THIS */
  /* se synopsis om AI brug: Featured Events */
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeEvent = Number(
    searchParams.get("event") || "0",
  );
  const isActive = index === activeEvent;
  //////////////////////

  const newDate = new Date(date);
  let options = {
    hour: "numeric",
    minute: "numeric",
    month: "long",
    day: "numeric",
  };
  const actualDate = new Intl.DateTimeFormat(
    "en-UK",
    options,
  ).format(newDate);

  /* AI HELPED WITH THIS */
  /* se synopsis om AI brug: Featured Events */
  const handleButtonClick = (targetIndex) => {
    router.push(`?event=${targetIndex}`, {
      scroll: false,
    });
  };
  ///////////////

  return (
    <li
      className={`relative max-w-fit max-h-fit flex-col ${isActive ? "flex" : "hidden md:flex"}`}
    >
      <div className="image-hover relative object-cover">
        <Image
          className="min-h-80 object-cover"
          src={imagesrc}
          alt={alt}
          width={600}
          height={500}
        />

        <div className="flex flex-col featured-overlay border-y-(--pink) border-y-2">
          <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-40 border-bs-0 border-e-0 border-be-40 z-10"></div>
          <div className="flex justify-center mt-15">
            <Link href={`/booktable/${id}`}>
              <button className="pink-btn uppercase cursor-pointer  py-2 px-4 bg-[#030202]/25 bg-linear-to-r from-[#f72a78] to-[#b822b5]">
                book event
              </button>
            </Link>
          </div>
          <div className="text-overlay w-full p-4 gap-2 featured-overlay-text absolute top-[50%] left-[50%] bottom-0">
            <h3 className="font-(--font-weight-h3) text-(length:--font-h3) tracking-(--letter-spacing-home-h3) uppercase">
              {title}
            </h3>
            <p>{description}</p>
          </div>
          <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0 z-10"></div>
        </div>
      </div>
      <div className="flex justify-between py-1 px-3 gap-2 bg-(--pink) w-full">
        <p>{location}</p>
        <p>{actualDate}</p>
      </div>

      <div className="flex justify-center gap-3 mt-small-medium md:hidden w-full">
        <button
          onClick={() => handleButtonClick(0)}
          className={`w-5 h-5 cursor-pointer border-none transition-transform ${
            activeEvent === 0
              ? "bg-(--pink) scale-110"
              : "bg-foreground"
          }`}
          aria-label="Show featured event"
        />
        <button
          onClick={() => handleButtonClick(1)}
          className={`w-5 h-5 cursor-pointer border-none transition-transform ${
            activeEvent === 1
              ? "bg-(--pink) scale-110"
              : "bg-foreground"
          }`}
          aria-label="Show other featured event"
        />
      </div>
    </li>
  );
};

export default FeaturedEventsCard;
