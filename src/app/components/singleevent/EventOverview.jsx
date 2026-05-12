import Image from "next/image";
import PrimaryButtons from "../buttons/PrimaryButtons";

const EventOverview = ({
  imagesrc,
  alt,
  date,
  doorsOpen,
  startTime,
  location,
  category,
  price,
  ageRestriction,
  lineUp,
  schedule,
  content,
}) => {
  return (
    <section className="mt-15">
      <div>
        <Image
          src={imagesrc}
          alt={alt}
          width={1000}
          height={800}
        />
      </div>
      <div className="flex justify-between my-4 flex-wrap gap-2">
        <div className="flex flex-wrap gap-1">
          <p className="uppercase text-(--pink) font-bold">
            date:
          </p>
          <p className="uppercase">{date}</p>
        </div>
        <div className="flex flex-wrap gap-1">
          <p className="uppercase text-(--pink) font-bold">
            doors open:
          </p>
          <p className="uppercase">{doorsOpen}</p>
        </div>
        <div className="flex flex-wrap gap-1">
          <p className="uppercase text-(--pink) font-bold">
            event start:
          </p>
          <p className="uppercase">{startTime}</p>
        </div>
        <div className="flex flex-wrap gap-1">
          <p className="uppercase text-(--pink) font-bold">
            place:
          </p>
          <p className="uppercase">{location}</p>
        </div>
        <div className="flex flex-wrap gap-1">
          <p className="uppercase text-(--pink) font-bold">
            category:
          </p>
          <p className="uppercase">{category}</p>
        </div>
      </div>
      <div className="flex justify-between mb-4 flex-wrap gap-2">
        <div className="flex flex-wrap gap-1">
          <p className="uppercase text-(--pink) font-bold">
            price:
          </p>
          <p className="uppercase">{price}</p>
        </div>
        <div className="flex flex-wrap gap-1">
          <p className="uppercase text-(--pink) font-bold">
            age:
          </p>
          <p className="uppercase">
            {ageRestriction}
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          <p className="uppercase text-(--pink) font-bold">
            schedule:
          </p>
          <p className="uppercase">{schedule}</p>
        </div>
        <div className="flex flex-wrap gap-1">
          <p className="uppercase text-(--pink) font-bold">
            lineup:
          </p>
          <p className="uppercase">{lineUp}</p>
        </div>
      </div>
      <div className="flex flex-wrap mx-medium-to-large my-20">
        <p className="w-[80ch]">{content}</p>
        <div className="mt-auto ml-auto pt-10">
          <PrimaryButtons textInput="book now" />
        </div>
      </div>
    </section>
  );
};

export default EventOverview;
