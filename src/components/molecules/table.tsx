/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAccount } from "wagmi";
import { cn } from "@/lib/utils";

export const TableComponent = () => {
  const account = useAccount();

  const items: any[] = [];

  return (
    <div
      className={"w-full h-auto mt-10 flex justify-center items-start"}
      id={"table"}
    >
      <div
        className={
          "w-[80%] min-h-[400px] max-h-full flex flex-col justify-start items-center border bg-white shadow-lg rounded-lg overflow-hidden"
        }
      >
        {/* Header Row */}
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

        {/* Table Content */}
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="flex flex-row w-full h-16 border-b">
              <TableItem value={item.name} />
              <TableItem value={item.amount} />
              <TableItem value={item.duration} />
              <TableItem value={item.apr} />
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
        "h-full w-1/4 flex justify-center items-center px-4",
        className
      )}
    >
      {value}
    </div>
  );
};
