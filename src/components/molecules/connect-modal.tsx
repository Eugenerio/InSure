import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { addressFormat } from "@/lib/helpers";
import {
  Button,
  Label,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components";
import { metaMask } from "wagmi/connectors";
import {
  IDKitWidget,
  IErrorState,
  ISuccessResult,
  VerificationLevel,
} from "@worldcoin/idkit";
import { toast } from "react-toastify";
import { useWCContext } from "@/lib/context";
import { verify } from "@/lib/helpers/verify";

export const ConnectModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { proof, setProof } = useWCContext();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  const account = useAccount();
  const isWalletConnected = !!account.address;

  const ensName = useEnsName({
    address: account.address,
  });

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

  const isWCDataExist = !!proof;

  const onSuccess = (proof: ISuccessResult) => {
    setProof(proof.proof);
  };

  const handleProof = async (result: ISuccessResult) => {
    console.log(
      "Proof received from IDKit, sending to backend:\n",
      JSON.stringify(result)
    );
    const data = await verify(result);
    if (data.success) {
      console.log("Successful response from backend:\n", JSON.stringify(data));
    } else {
      throw new Error(`Verification failed: ${data.detail}`);
    }
  };

  const errorHandler = (e: IErrorState) => {
    console.log(e);
    toast(e.message, { type: "error" });
  };

  const closeHandler = () => {
    try {
      if (isWalletConnected && !isWCDataExist) {
        disconnect();
      }
      setOpenModal(false);
    } catch (e: any) {
      console.log(e);
      toast(e.message, { type: "error" });
    }
  };

  return (
    <Dialog
      open={openModal}
      onOpenChange={(open) => {
        if (!open) {
          closeHandler();
        }
        setOpenModal(open);
      }}
    >
      <DialogTrigger asChild>
        <Button className={"p-5 rounded-lg ml-4"} variant={"secondary"}>
          {isWalletConnected
            ? ensName.data || addressFormat(account.address!)
            : "Connect your EVM wallet"}
        </Button>
      </DialogTrigger>
      <DialogContent className={"max-w-[400px] z-[99999] "}>
        <DialogHeader className={"text-center w-full "}>
          <DialogTitle className={"font-lg text-lg"}>
            Connect Wallet
          </DialogTitle>
        </DialogHeader>
        {isWalletConnected && isWCDataExist ? (
          <div className={"w-full h-full flex flex-col font-mono"}>
            <span className={"mt-5"}>
              You have already successfully connected your{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <i>{ensName.data || addressFormat(account.address!)}</i>
                  </TooltipTrigger>
                  <TooltipContent>{account.address}</TooltipContent>
                </Tooltip>
              </TooltipProvider>{" "}
              to InSure website
            </span>
            <Button className={"p-5 mt-10"} onClick={() => disconnect()}>
              Disconnect your wallet
            </Button>
          </div>
        ) : (
          <div className={"w-full h-full p-5 flex flex-col font-sans"}>
            <Label className={"text-md font-medium"}>
              1. Connect your EVM Wallet
            </Label>
            <Button
              className={"p-5 rounded-lg mt-5 max-w-[200px]"}
              variant={"default"}
              onClick={metamaskWalletHandler}
            >
              {isWalletConnected
                ? ensName.data || addressFormat(account.address!)
                : "Connect wallet"}
            </Button>

            <Label className={"text-md font-medium mt-5"}>
              2. Verify with World ID
            </Label>
            <IDKitWidget
              app_id={process.env.NEXT_PUBLIC_WLD_APP_ID as `app_${string}`}
              action={process.env.NEXT_PUBLIC_WLD_ACTION as string}
              onSuccess={onSuccess}
              handleVerify={handleProof}
              onError={errorHandler}
              verification_level={VerificationLevel.Device}
            >
              {({ open }) => (
                <Button
                  onClick={() => (isWCDataExist ? null : open())}
                  className={"w-[200px] mt-5"}
                >
                  {isWCDataExist ? "Already verified" : "Verify with World ID"}
                </Button>
              )}
            </IDKitWidget>
            <Button
              className={"mt-10"}
              disabled={isWCDataExist || isWalletConnected}
              onClick={closeHandler}
            >
              Finish
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
