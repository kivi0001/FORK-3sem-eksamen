import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-image flex flex-col items-center">
      <div>
        <Image
          alt="logo image with the text 'Night Club'"
          className="logo-image"
          src="/assets/icon/Logo.svg"
          width={800}
          height={200}
        ></Image>
        <h1 className="text-(length:--font-home-h1) text-center font-(--font-weight-home-h1) uppercase tracking-(--letter-spacing-home-h1)">
          Have a good time
        </h1>
      </div>
      <div>
        <Image
          alt="image of a pink decorative line"
          src="/assets/bottom_line.png"
          width={800}
          height={100}
        ></Image>
      </div>
      <div className="flex gap-5">
        <button className="uppercase border-2 cursor-pointer border-white/50 py-2 px-4 bg-[#030202]/25">
          view events
        </button>
        <button className="uppercase  cursor-pointer  py-2 px-4 bg-[#030202]/25 bg-linear-to-r from-[#F72A78] to-[#B822B5]">
          book table
        </button>
      </div>
    </section>
  );
};

export default Hero;
