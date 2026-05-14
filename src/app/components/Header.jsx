"use client";
import Image from "next/image";
import HeaderButton from "./HeaderButton";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";
import "@/app/custom.css";

const Header = () => {
  return (
    <div className="header-wrapper sticky z-100 top-0 bg-background">
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
        <nav className="flex gap-(--padding-block-input-field) place-content-center items-center justify-between">
          <Link href="/">
            <HeaderButton>home</HeaderButton>
          </Link>
          <Link href="/events">
            <HeaderButton>events</HeaderButton>
          </Link>
          <Link href="/booktable">
            <HeaderButton>
              book table
            </HeaderButton>
          </Link>
          <Link href="/contact">
            <HeaderButton>
              contact us
            </HeaderButton>
          </Link>
        </nav>
        <BurgerMenu></BurgerMenu>
        <div className="border-s-transparent border-bs-transparent border-e-transparent border-be-(--pink) border-s-40 border-bs-0 border-e-0 border-be-40"></div>
      </header>
    </div>
  );
};

export default Header;
