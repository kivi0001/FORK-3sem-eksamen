import Image from "next/image";
import Link from "next/link";

const FeaturedEventsCard = ({
  date,
  title,
  description,
  imagesrc,
  alt,
  location,
  slug,
}) => {
  return (
    <li className="relative">
      <div className="image-hover relative">
        <Image
          className="w-full h-80 object-cover"
          src={imagesrc}
          alt={alt}
          width={600}
          height={500}
        />

        <div className="flex flex-col overlay border-y-(--pink) border-y-2">
          <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-40 border-bs-0 border-e-0 border-be-40"></div>
          <div className="flex justify-center mt-15">
            <Link href={`/singleevent/${slug}`}>
              <button className="cursor-pointer bg-(--pink) py-2 px-4 uppercase">
                book event
              </button>
            </Link>
          </div>
          <div className="w-full p-4 gap-2 featured-overlay-text absolute top-[50%] left-[50%]">
            <h3 className="font-(--font-weight-h3) text-(length:--font-h3) tracking-(--letter-spacing-home-h3) uppercase">
              {title}
            </h3>
            <p>{description}</p>
          </div>
          <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
        </div>
      </div>
      <div className="flex justify-between p-1 gap-2 bg-(--pink) w-full">
        <p>{location}</p>
        <p>{date}</p>
      </div>
    </li>
  );
};

export default FeaturedEventsCard;
