"use client";
import "@/app/custom.css";
import styles from "@/app/custom.css";
import HeaderButton from "./HeaderButton";
import { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <div className="burger-container">
      <button popoverTarget="popup" className="">
        <span className=""></span>
        <span className=""></span>
        <span className=""></span>
      </button>

      <div
        className="dropdown-content"
        id="popup"
        popover="manual"
      >
        <div className="popup-container">
          <HeaderButton href="#">
            home
          </HeaderButton>
          <HeaderButton href="#">
            events
          </HeaderButton>
          <HeaderButton href="#">
            book table
          </HeaderButton>
          <HeaderButton href="#">
            contact us
          </HeaderButton>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
