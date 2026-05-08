import Image from "next/image";

const WelcomeCard = (link) => {
  return (
    <div>
      <Image
        src={link}
        alt="a picture representing the theme"
        layout="fill"
        objectFit="cover"
      ></Image>
    </div>
  );
};

export default WelcomeCard;
