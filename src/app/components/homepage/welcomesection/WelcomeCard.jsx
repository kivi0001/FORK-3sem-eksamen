import Image from "next/image";

const WelcomeCard = ({
  link,
  icon,
  theme,
  description,
}) => {
  return (
    <div className="image-hover relative">
      <Image
        src={link}
        alt="a picture representing the theme"
        width={500}
        height={600}
      ></Image>
      <div className="flex flex-col overlay border-y-(--pink) border-y-2">
        <div className="border-s-(--pink) border-bs-transparent border-e-transparent border-be-transparent border-s-40 border-bs-0 border-e-0 border-be-40"></div>
        <div className="w-full p-4 flex flex-col gap-2 overlay-text absolute top-[50%] left-[50%]">
          <h3 className=" text-(length:--font-home-track-h3) uppercase font-(--font-weight-h3)">
            {theme}
          </h3>
          <p>{description}</p>
        </div>
        <div className="mt-auto border-s-transparent border-bs-transparent border-e-(--pink) border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
      </div>
    </div>
  );
};

export default WelcomeCard;
