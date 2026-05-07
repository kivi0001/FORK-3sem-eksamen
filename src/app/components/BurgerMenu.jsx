"use client";
import "@/app/custom.css";
import { Popover } from "radix-ui";
import HeaderButton from "./HeaderButton";
import { RxCross2 } from "react-icons/rx";

const BurgerMenu = () => {
  return (
    <div className="burger-container">
      <Popover.Root>
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
            ></Popover.Close>
            <div className="flex flex-col gap-10 items-center justify-center w-screen h-screen">
              <HeaderButton>home</HeaderButton>
              <HeaderButton>events</HeaderButton>
              <HeaderButton>
                book table
              </HeaderButton>
              <HeaderButton>
                contact us
              </HeaderButton>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default BurgerMenu;
