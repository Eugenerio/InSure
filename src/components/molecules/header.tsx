"use client";

import { Button } from "@/components/ui/button";
import { useConnect, useAccount, useDisconnect } from "wagmi";
import { metaMask } from "wagmi/connectors";
import { addressFormat } from "@/lib/helpers";

export const Header = () => {
  const { connect } = useConnect();

  const { disconnect } = useDisconnect();

  const account = useAccount();
  const isWalletConnected = !!account.address;

  const metamaskWalletHandler = async () => {
    if (!account.address) {
      await connect({
        connector: metaMask({
          extensionOnly: true,
        }),
      });
    } else {
      await disconnect();
    }
  };

  return (
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
        <Button
          className={"p-5 rounded-lg"}
          variant={"secondary"}
          onClick={metamaskWalletHandler}
        >
          {isWalletConnected
            ? addressFormat(account.address!)
            : "Connect your EVM wallet"}
        </Button>
      </div>
    </div>
  );
};
