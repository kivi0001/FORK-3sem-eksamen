"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <header className="flex justify-evenly">
      <div>
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
    </header>
  );
};

export default Header;
