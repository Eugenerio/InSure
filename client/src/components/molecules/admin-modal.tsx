/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, Label, Input } from "@/components";
import { toast } from "react-toastify";
import { writeContract, getTransactionReceipt } from "@wagmi/core";
import { wagmiConfig } from "@/lib/wagmi/config";
import { erc20Abi, parseUnits } from "viem";
import { insuranceAbi, insuranceAddress } from "@/lib/wagmi/contract/abi";

export const AdminModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [addLiquidityAmount, setAddLiquidityAmount] = useState<string>("");
  const [withdrawLiquidityAmount, setWithdrawLiquidityAmount] =
    useState<string>("");

  const approve = async (amount: bigint) => {
    try {
      const txResponse = await writeContract(wagmiConfig, {
        address: "0x49d2c1D548ae5767D66DF42f74c3eab4f35490e1",
        abi: erc20Abi,
        functionName: "approve",
        args: [insuranceAddress, amount],
      });

      let receipt;
      const pollInterval = 1000;
      const maxRetries = 30;
      for (let i = 0; i < maxRetries; i++) {
        try {
          receipt = await getTransactionReceipt(wagmiConfig, {
            hash: txResponse,
          });
          if (receipt) {
            break;
          }
        } catch (e) {}
        await new Promise((resolve) => setTimeout(resolve, pollInterval));
      }

      if (receipt && receipt.status === "success") {
        toast.success("Approved!");
      } else {
        toast.error("Approval failed");
      }
    } catch (err: any) {
      toast.error("Approval failed: " + err.message);
    }
  };

  const add_liquidity = async (amount: bigint) => {
    try {
      const txResponse = await writeContract(wagmiConfig, {
        address: insuranceAddress,
        abi: insuranceAbi,
        functionName: "addLiquidity",
        args: [amount],
      });

      let receipt;
      const pollInterval = 1000;
      const maxRetries = 30;
      for (let i = 0; i < maxRetries; i++) {
        try {
          receipt = await getTransactionReceipt(wagmiConfig, {
            hash: txResponse,
          });
          if (receipt) {
            break;
          }
        } catch (e) {}
        await new Promise((resolve) => setTimeout(resolve, pollInterval));
      }

      // Check receipt status
      if (receipt && receipt.status === "success") {
        toast.success("Liquidity added successfully!");
      } else {
        toast.error("Failed to add liquidity");
      }
    } catch (err: any) {
      toast.error("An error occurred: " + err.message);
    }
  };

  const widthdraw_liquidity = async (amount: bigint) => {
    try {
      const txResponse = await writeContract(wagmiConfig, {
        address: insuranceAddress,
        abi: insuranceAbi,
        functionName: "widthdrawLiquidity",
        args: [amount],
      });

      let receipt;
      const pollInterval = 1000;
      const maxRetries = 30;
      for (let i = 0; i < maxRetries; i++) {
        try {
          receipt = await getTransactionReceipt(wagmiConfig, {
            hash: txResponse,
          });

          if (receipt) {
            break;
          }
        } catch (e) {}
        await new Promise((resolve) => setTimeout(resolve, pollInterval));
      }

      if (receipt && receipt.status === "success") {
        toast.success("Liquidity withdrawed successfully!");
      } else {
        toast.error("Failed to withdrawed liquidity");
      }
    } catch (err: any) {
      toast.error("An error occurred: " + err.message);
    }
  };

  const collect_fee = async () => {
    try {
      const txResponse = await writeContract(wagmiConfig, {
        address: insuranceAddress,
        abi: insuranceAbi,
        functionName: "collectFee",
      });

      let receipt;
      const pollInterval = 1000;
      const maxRetries = 30;
      for (let i = 0; i < maxRetries; i++) {
        try {
          receipt = await getTransactionReceipt(wagmiConfig, {
            hash: txResponse,
          });

          if (receipt) {
            break;
          }
        } catch (e) {}
        await new Promise((resolve) => setTimeout(resolve, pollInterval));
      }

      if (receipt && receipt.status === "success") {
        toast.success("Fee collected successfully!");
      } else {
        toast.error("Failed to collect fees liquidity");
      }
    } catch (err: any) {
      toast.error("An error occurred: " + err.message);
    }
  };

  const handleAddLiquidity = async () => {
    if (addLiquidityAmount) {
      const amountInBigInt = parseUnits(addLiquidityAmount, 18);
      console.log(addLiquidityAmount);
      await approve(amountInBigInt);
      console.log(`Adding liquidity: ${Number(addLiquidityAmount)}`);
      await add_liquidity(amountInBigInt);
    }
  };

  const handleWithdrawLiquidity = async () => {
    if (withdrawLiquidityAmount) {
      console.log(`Withdrawing liquidity: ${Number(withdrawLiquidityAmount)}`);
      const amountInBigInt = parseUnits(addLiquidityAmount, 18);
      await widthdraw_liquidity(amountInBigInt);
    }
  };

  const handleCollectFee = async () => {
    console.log("Collecting fee");
    await collect_fee();
  };

  const closeHandler = () => {
    setOpenModal(false);
    setAddLiquidityAmount("");
    setWithdrawLiquidityAmount("");
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
        <Button className={"p-5 rounded-lg"} variant={"secondary"}>
          Admin Settings
        </Button>
      </DialogTrigger>
      <DialogContent className={"max-w-[400px] z-[99999]"}>
        <DialogHeader className={"text-center w-full"}>
          <DialogTitle className={"font-lg text-lg"}>Admin Actions</DialogTitle>
        </DialogHeader>
        <div className={"w-full h-full p-5 flex flex-col font-sans"}>
          <Label className={"text-md font-medium"}>Add Liquidity</Label>
          <Input
            type="number"
            placeholder="Enter amount"
            value={addLiquidityAmount}
            onChange={(e) => setAddLiquidityAmount(e.target.value)}
            className={"mt-2 mb-4"}
          />
          <Button
            className={"p-5 mb-5"}
            variant={"default"}
            onClick={handleAddLiquidity}
            disabled={!addLiquidityAmount}
          >
            Add Liquidity
          </Button>

          <Label className={"text-md font-medium"}>Withdraw Liquidity</Label>
          <Input
            type="number"
            placeholder="Enter amount"
            value={withdrawLiquidityAmount}
            onChange={(e) => setWithdrawLiquidityAmount(e.target.value)}
            className={"mt-2 mb-4"}
          />
          <Button
            className={"p-5 mb-5"}
            variant={"default"}
            onClick={handleWithdrawLiquidity}
            disabled={!withdrawLiquidityAmount}
          >
            Withdraw Liquidity
          </Button>

          <Button
            className={"p-5 mb-5"}
            variant={"default"}
            onClick={handleCollectFee}
          >
            Collect Fee
          </Button>

          <Button className={"mt-10"} onClick={closeHandler}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
