/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAccount, useSwitchChain } from "wagmi";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { addressFormat } from "@/lib/helpers";
import { Button } from "@/components";
import { insuranceAddress } from "@/lib/wagmi/contract/abi";
import { useEthersSigner } from "@/lib/wagmi/ethersjs";
import { Contract } from "ethers";
import { erc20Abi } from "viem";
import { WrapperBuilder } from "@redstone-finance/evm-connector";
import { getTransactionReceipt, writeContract } from "viem/actions";
import { wagmiConfig } from "@/lib/wagmi/config";
import { toast } from "react-toastify";

const OP_SEPOLIA = 11155420;

export const TableComponent = () => {
  const account = useAccount();
  const signer = useEthersSigner();

  const { switchChainAsync } = useSwitchChain();

  const getTransactionReceipt = async (provider: any, txHash: any) => {
    try {
      const receipt = await provider.getTransactionReceipt(txHash);
      return receipt;
    } catch (error) {
      console.error("Error fetching receipt:", error);
      throw error;
    }
  };

  const get_repayment = async (item: any) => {
    try {
      const res = require("@/lib/wagmi/contract/abi.json");
      const contract = new Contract(
        "0x3ed6f48ba9fca1a33e959a7628f5b59c15b6b6b9",
        res.abi,
        signer
      ) as any;
      console.log("Contract", contract);
      const wrappedContract = await WrapperBuilder.wrap(
        contract
      ).usingSimpleNumericMock({
        mockSignersCount: 10,
        dataPoints: [{ dataFeedId: "USDT", value: 0.7 }],
      });

      await switchChainAsync({ chainId: OP_SEPOLIA });

      const tx = await wrappedContract.getRepayment(item.policyId);
      console.log("Transaction", tx);

      let receipt;
      const pollInterval = 2000; // Increased interval
      const maxRetries = 60; // Increased retries
      for (let i = 0; i < maxRetries; i++) {
        try {
          receipt = await getTransactionReceipt(signer.provider, tx.hash);
          console.log("Receipt", receipt);
          if (receipt) {
            break;
          }
        } catch (e) {
          console.error("Error fetching transaction receipt", e);
        }
        await new Promise((resolve) => setTimeout(resolve, pollInterval));
      }

      if (receipt && receipt.status === "success") {
        await fetch("/api/delete", {
          body: JSON.stringify({ policyId: item.policyId }),
          method: "POST",
        });
        toast.success("Success!");
      } else {
        toast.error("Reverted Transaction");
      }
    } catch (e: any) {
      console.error("Error during repayment:", e);
      toast.error(e.message);
    }
  };

  const { data: list = [] } = useQuery({
    queryKey: ["insurances", account.address],
    queryFn: async () => {
      if (!account.address) return [];
      const res = await fetch(`/api/get_all?wallet=${account.address}`, {
        method: "GET",
      }).then((res) => res.json());

      return res.objects || [];
    },
  });

  return (
    <div
      className={"w-full h-auto mt-10 flex justify-center items-start"}
      id={"table"}
    >
      <div
        className={
          "w-[85%] min-h-[400px] max-h-full flex flex-col justify-start items-center border bg-white shadow-lg rounded-lg overflow-hidden"
        }
      >
        <div
          className={
            "flex flex-row w-full border-b h-16 bg-black text-white font-semibold"
          }
        >
          <TableItem value={"Name"} />
          <TableItem value={"Amount"} />
          <TableItem value={"Duration"} />
          <TableItem value={"APR"} />
        </div>

        {list.length > 0 ? (
          list.map((item: any, index: number) => (
            <div
              key={`list-${index}`}
              className="flex flex-row w-full h-16 border-b px-2"
            >
              <TableItem value={addressFormat(item.policyId)} />
              <TableItem value={item.amount} />
              <TableItem value={item.duration} />
              <div className={"flex justify-center items-center w-full"}>
                <Button onClick={() => get_repayment(item)}>
                  Get repayment
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className={"w-full h-[300px] flex justify-center items-center"}>
            <span className={"text-xl font-medium text-gray-700"}>
              There is no data yet. Please connect a wallet.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

interface TableItemProps {
  value: string;
  className?: string;
}

const TableItem = ({ value, className }: TableItemProps) => {
  return (
    <div
      className={cn(
        "h-full w-full flex justify-center items-center px-4",
        className
      )}
    >
      {value}
    </div>
  );
};
