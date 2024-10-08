"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { ConnectModal } from "@/components";
import { AdminModal } from "./admin-modal";

export const Header = () => {
  const { address } = useAccount();
  const [showAdminModal, setShowAdminModal] = useState(false);

  const adminAddress = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

  useEffect(() => {
    if (address === adminAddress) {
      setShowAdminModal(true);
    } else {
      setShowAdminModal(false);
    }
  }, [address, adminAddress]);

  return (
    <header className="sticky top-0 w-full h-20 z-50 bg-black bg-opacity-70 backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-center w-full h-full px-8 lg:px-24">
        <a
          href="/"
          className="text-white text-2xl font-bold cursor-pointer transition-all duration-300 hover:scale-105"
        >
          InSure
        </a>

        <nav className="flex space-x-8">
          <a
            className="text-white font-medium text-lg cursor-pointer group transition-all duration-300 ease-in-out hover:text-gray-400"
            href={"#form"}
          >
            <span className="bg-left-bottom bg-gradient-to-r from-gray-400 to-gray-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Form
            </span>
          </a>
          <a
            className="text-white font-medium text-lg cursor-pointer group transition-all duration-300 ease-in-out hover:text-gray-400"
            href={"#table"}
          >
            <span className="bg-left-bottom bg-gradient-to-r from-gray-400 to-gray-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Table
            </span>
          </a>
        </nav>

        <div className="flex space-x-4 items-center">
          {showAdminModal && <AdminModal />}
          <ConnectModal />
        </div>
      </div>
    </header>
  );
};
