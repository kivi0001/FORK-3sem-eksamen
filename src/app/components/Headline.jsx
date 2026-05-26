import Image from "next/image";

const Headline = ({ text }) => {
  return (
    <div className="flex flex-col py-8 col-span-full relative h-60 bg-background">
      <Image
        className="opacity-20 brightness-45"
        src="/assets/bg/footerbg.jpg"
        layout="fill"
        objectFit="cover"
        alt="headline background"
      />

      <div className="flex flex-col items-center py-15">
        <h1 className="text-center text-(length:--font-home-h2) font-(--font-weight-home-h2) tracking-(--letter-spacing-home-h2) uppercase z-10">
          {text}
        </h1>
        <Image
          src="/assets/bottom_line2.png"
          alt="a pink line under text"
          width={400}
          height={200}
        ></Image>
      </div>
    </div>
  );
};

export default Headline;
