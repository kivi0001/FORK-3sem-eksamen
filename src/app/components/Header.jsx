"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <header className="flex justify-between border-y-(--pink) border-y-2">
      <div className="border-s-transparent border-bs-(--pink) border-e-transparent border-be-transparent border-s-0 border-bs-40 border-e-40 border-be-0"></div>
      <div className="py-4">
        <Image
          src="/assets/Logo.png"
          width={220}
          height={50}
          alt="Logo with the text 'Night Club'"
        ></Image>
      </div>
      <nav className="flex gap-4 place-content-center justify-between">
        <HeaderButton href="#">home</HeaderButton>
        <HeaderButton href="#">
          events
        </HeaderButton>
        <HeaderButton href="#">
          book table
        </HeaderButton>
        <HeaderButton href="#">
          contact us
        </HeaderButton>
      </nav>
      <div className="border-s-transparent border-bs-transparent border-e-transparent border-be-(--pink) border-s-40 border-bs-0 border-e-0 border-be-40"></div>
    </header>
  );
};

export default Header;
