/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSwitchChain } from "wagmi";
import { cn } from "@/lib/utils";
import { addressFormat } from "@/lib/helpers";
import { Button } from "@/components";
import { useEthersSigner } from "@/lib/wagmi/ethersjs";
import { Contract } from "ethers";
import { WrapperBuilder } from "@redstone-finance/evm-connector";
import { toast } from "react-toastify";

const OP_SEPOLIA = 11155420;

interface Props {
  list: any[];
  refetch: () => void;
}

export const TableComponent = ({ list, refetch }: Props) => {
  const signer = useEthersSigner();

  const { switchChainAsync } = useSwitchChain();

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

      let receipt = null;
      const pollInterval = 1000; // 1 second
      const maxRetries = 30; // 30 retries = 30 seconds timeout

      for (let i = 0; i < maxRetries; i++) {
        try {
          receipt = await signer?.provider.getTransactionReceipt(tx.hash);
          if (receipt) {
            console.log("Receipt", receipt);
            break;
          }
        } catch (e) {
          console.error("Error fetching transaction receipt");
        }

        await new Promise((resolve) => setTimeout(resolve, pollInterval));
      }

      console.log("Receipt", receipt);
      if (receipt && receipt.status === 1) {
        await fetch("/api/delete", {
          body: JSON.stringify({ policyId: item.policyId }),
          method: "POST",
        });
        void refetch();
        toast.success("Success!");
      } else {
        toast.error("Reverted Transaction");
      }
    } catch (e: any) {
      console.error("Error during repayment:");
      toast.error("Error during repayment");
    }
  };

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
