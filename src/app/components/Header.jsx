"use client";
import Image from "next/image";
import HeaderButton from "./HeaderButton";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";
import "@/app/custom.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="header-wrapper z-50 bg-background">
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
            <HeaderButton
              active={pathname === "/"}
            >
              home
            </HeaderButton>
          </Link>
          <Link href="/events">
            <HeaderButton
              active={pathname === "/events"}
            >
              events
            </HeaderButton>
          </Link>
          <Link href="/booktable">
            <HeaderButton
              active={pathname === "/booktable"}
            >
              book table
            </HeaderButton>
          </Link>
          <Link href="/contact">
            <HeaderButton
              active={pathname === "/contact"}
            >
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
