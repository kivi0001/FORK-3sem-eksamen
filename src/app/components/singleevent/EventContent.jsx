import Image from "next/image";
import PrimaryButtons from "../buttons/PrimaryButtons";
import Link from "next/link";

const EventContent = ({
  imagesrc,
  alt,
  title,
  content,
  id,
}) => {
  return (
    <article className="singleview-content gap-small my-medium">
      <figure className="singleview-img w-full h-auto object-cover my-small">
        <Image
          src={imagesrc}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "70%",
          }}
        />
      </figure>
      <div className="singleview-textbox flex flex-col md:max-w-120 md:min-w-100">
        <div className="singleview-scrollbar max-h-100 overflow-y-scroll my-small md:pb-4 md:pl-6 pt-2 pb-4">
          <h2 className="singleview-headline text-(--pink) text-(length:--font-h3) uppercase font-medium mb-small tracking-(--letter-spacing-h1)">
            {title}
          </h2>
          <p className="singleview-text text-(length:--font-p) max-w-110 pr-small">
            {content}
          </p>
        </div>
        <div className="booktable-button mt-3 ml-auto mb-5 self-end">
          <Link href={`/booktable/${id}`}>
            <PrimaryButtons
              id="primarybtn"
              textInput="book now"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default EventContent;
