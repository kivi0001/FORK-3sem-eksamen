"use client";
import "@/app/custom.css";
import { Popover } from "radix-ui";
import HeaderButton from "./HeaderButton";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";

const BurgerMenu = () => {
  /* AI HELPED WITH THIS */
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpenClosed = (open) => {
    setIsOpen(open);
  };
  /* ******************** */
  return (
    <div className="burger-container">
      <Popover.Root
        open={isOpen}
        onOpenChange={toggleOpenClosed}
        id="popoverRoot"
        className="popover-root"
      >
        <Popover.Trigger>
          <div className="trigger-div">
            <span className="popover-trigger"></span>
            <span className="popover-trigger"></span>
            <span className="popover-trigger"></span>
          </div>
          <div className="close-div"></div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="PopoverContent">
            <Popover.Close
              className="absolute top-0 right-5"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-black">
                <RxCross2 size={50}></RxCross2>
              </div>
            </Popover.Close>
            <div className="flex flex-col gap-10 items-center justify-center w-screen h-screen">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
              >
                <HeaderButton>home</HeaderButton>
              </Link>
              <Link
                href="/events"
                onClick={() => setIsOpen(false)}
              >
                <HeaderButton>
                  events
                </HeaderButton>
              </Link>
              <Link
                href="/booktable"
                onClick={() => setIsOpen(false)}
              >
                <HeaderButton>
                  book&nbsp;table
                </HeaderButton>
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
              >
                <HeaderButton>
                  contact&nbsp;us
                </HeaderButton>
              </Link>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default BurgerMenu;
