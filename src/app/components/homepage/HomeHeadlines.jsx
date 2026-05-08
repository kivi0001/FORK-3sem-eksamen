import Image from "next/image";

const HomeHeadlines = ({ text }) => {
  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-center text-(length:--font-home-h2) font-(--font-weight-home-h2) tracking-(--letter-spacing-home-h2) uppercase">
        {text}
      </h2>
      <Image
        src="/assets/bottom_line2.png"
        alt="a pink line under text"
        width={400}
        height={200}
      ></Image>
    </div>
  );
};

export default HomeHeadlines;
