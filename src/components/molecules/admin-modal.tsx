import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, Label, Input } from "@/components";

export const AdminModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [addLiquidityAmount, setAddLiquidityAmount] = useState<string>("");
  const [withdrawLiquidityAmount, setWithdrawLiquidityAmount] =
    useState<string>("");

  const handleAddLiquidity = () => {
    if (addLiquidityAmount) {
      console.log(`Adding liquidity: ${Number(addLiquidityAmount)}`);
    }
  };

  const handleWithdrawLiquidity = () => {
    if (withdrawLiquidityAmount) {
      console.log(`Withdrawing liquidity: ${Number(withdrawLiquidityAmount)}`);
    }
  };

  const handleCollectFee = () => {
    console.log("Collecting fee");
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
