import Image from "next/image";

const HomeHeadlines = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Image
        src="/assets/bottom_line2.png"
        alt="a pink line under text"
        width={500}
        height={200}
      ></Image>
    </div>
  );
};

export default HomeHeadlines;
