"use client";

import { ConnectModal } from "@/components";

export const Header = () => (
  <div className="sticky top-0 w-full h-20 flex justify-center items-center z-50 px-10 lg:px-24">
    <div
      className={
        "bg-black rounded-xl px-5 py-3 flex justify-center items-center mt-2 lg:mt-0"
      }
    >
      <a
        className="text-white mx-5 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white"
        href={"#form"}
      >
        <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          Form
        </span>
      </a>
      <a
        className="text-white mx-5 cursor-pointer group transition-all duration-300 ease-in-out hover:text-white"
        href={"#table"}
      >
        <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          Table
        </span>
      </a>
      <ConnectModal />
    </div>
  </div>
);
