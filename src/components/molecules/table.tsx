/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAccount } from "wagmi";
import { cn } from "@/lib/utils";
import {useQuery} from "@tanstack/react-query";
import {addressFormat} from "@/lib/helpers";
import {Button} from "@/components";

export const TableComponent = () => {
  const account = useAccount();

  const { data: list } = useQuery({
    queryKey: ["insurances", account.address],
    queryFn: async () => {
      const res = await fetch(`/api/get_all?wallet=${account.address}`, {
        method: "GET",
      }).then(res => res.json());



      return res.objects || [];
    }
  })


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
          list.map((item, index) => (
            <div key={`list-${index}`} className="flex flex-row w-full h-16 border-b px-2">
              <TableItem value={addressFormat(item.policyId)} />
              <TableItem value={item.amount} />
              <TableItem value={item.duration} />
            <div className={"flex justify-center items-center w-full"}>
              <Button>Get repayment</Button>
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
