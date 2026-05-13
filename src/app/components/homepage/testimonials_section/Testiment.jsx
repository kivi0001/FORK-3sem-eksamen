import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Testiment = ({
  imgsrc,
  alt,
  name,
  testiment,
  facebook,
  twitter,
}) => {
  return (
    <li className="justify-center z-1 flex flex-col items-center">
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
    </li>
  );
};

export default Testiment;
