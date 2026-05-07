"use client";
import "@/app/custom.css";
import { Popover } from "radix-ui";
import HeaderButton from "./HeaderButton";

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
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="flex flex-col gap-5 w-screen h-screen items-center justify-center">
            <HeaderButton>home</HeaderButton>
            <HeaderButton>events</HeaderButton>
            <HeaderButton>
              book table
            </HeaderButton>
            <HeaderButton>
              contact us
            </HeaderButton>
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default BurgerMenu;
