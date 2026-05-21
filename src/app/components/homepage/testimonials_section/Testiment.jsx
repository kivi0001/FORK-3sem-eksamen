"use client";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

const Testiment = ({
  imgsrc,
  alt,
  name,
  testiment,
  facebook,
  twitter,
  index,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTestament = Number(
    searchParams.get("testimonials") || "0",
  );
  const isActive = index === activeTestament;

  const handleButtonClick = (targetIndex) => {
    router.push(`?testimonials=${targetIndex}`, {
      scroll: false,
    });
  };

  return (
    <li
      className={`justify-center z-1 flex flex-col items-center gap-4 ${isActive ? "flex" : "hidden"}`}
    >
      <Image
        src={imgsrc}
        alt={alt}
        width={200}
        height={200}
      />
      <h3 className="my-6 uppercase font-(--font-weight-h3)">
        {name}
      </h3>
      <p className="text-center w-[80ch]">
        {testiment}
      </p>
      <div className="flex gap-6 my-6">
        <a
          className="border p-2"
          href={facebook}
          target="_blank"
        >
          <FaFacebookF size={25} />
        </a>
        <a
          className="border p-2"
          href={twitter}
          target="_blank"
        >
          <FaTwitter size={25}></FaTwitter>
        </a>
      </div>
      <div className="flex justify-center gap-3 mt-small-medium w-full">
        <button
          onClick={() => handleButtonClick(0)}
          className={`w-5 h-5 cursor-pointer border-none transition-transform ${
            activeTestament === 0
              ? "bg-(--pink) scale-110"
              : "bg-foreground"
          }`}
          aria-label="Show featured event"
        />
        <button
          onClick={() => handleButtonClick(1)}
          className={`w-5 h-5 cursor-pointer border-none transition-transform ${
            activeTestament === 1
              ? "bg-(--pink) scale-110"
              : "bg-foreground"
          }`}
          aria-label="Show other featured event"
        />
        <button
          onClick={() => handleButtonClick(2)}
          className={`w-5 h-5 cursor-pointer border-none transition-transform ${
            activeTestament === 2
              ? "bg-(--pink) scale-110"
              : "bg-foreground"
          }`}
          aria-label="Show other featured event"
        />
      </div>
    </li>
  );
};

export default Testiment;
