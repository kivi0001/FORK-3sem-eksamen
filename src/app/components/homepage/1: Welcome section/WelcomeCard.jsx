import Image from "next/image";

const WelcomeCard = ({
  link,
  icon,
  theme,
  description,
}) => {
  return (
    <div>
      <Image
        src={link}
        alt="a picture representing the theme"
        width={500}
        height={600}
      ></Image>
      <div>
        <Icon></Icon>
        <h3>{theme}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WelcomeCard;
