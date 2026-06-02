"use client";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  {
    image: "img1",
    link: "/assets/bg/header_bg_1.webp",
  },
  {
    image: "img2",
    link: "/assets/bg/header_bg_2.webp",
  },
];

const Hero = () => {
  var randomImage =
    heroImages[
      Math.floor(
        Math.random() * heroImages.length,
      )
    ].link;

  return (
    <section className="hero-image relative h-screen flex flex-col items-center justify-center bg-background!">
      <Image
        alt="background hero image of party people"
        className="image-party"
        src={randomImage}
        layout="fill"
        objectFit="cover"
        loading="eager"
        suppressHydrationWarning={true}
      ></Image>

      <div className="flex flex-col items-center ">
        <div>
          <Image
            alt="logo image with the text 'Night Club'"
            className="logo-image w-full h-auto"
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
            src="/assets/bottom_line.webp"
            className="w-full h-auto"
            width={800}
            height={100}
          ></Image>
        </div>
        <div className="flex gap-5">
          <Link
            href="/events"
            className="black-btn uppercase border-2 cursor-pointer border-white/50 py-2 px-4 bg-[#030202]/25"
            aria-label="Link to events page"
          >
            view events
          </Link>
          <Link
            href="/booktable"
            className="pink-btn uppercase border-2 border-white/50 cursor-pointer  py-2 px-4 bg-[#030202]/25 bg-linear-to-r from-[#f72a78] to-[#b822b5]"
            aria-label="Link to book table page"
          >
            book table
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
