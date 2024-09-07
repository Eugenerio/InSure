import { useAccount } from "wagmi";
import {cn} from "@/lib/utils";

export const TableComponent = () => {
  const account = useAccount();

  const items = [];
  return (
    <div className={"w-full h-screen mt-30 flex justify-center items-center"} id={"table"}>
      <div className={"w-[80%] min-h-[400px] max-h-full flex flex-col justify-start items-center border"}>
          <div className={"flex flex-row w-full border-b h-20 bg-black rounded-tl-xl rounded-tr-xl text-white"}>
            <TableItem value={"Name"}/>
              <TableItem value={"Amount"} />
              <TableItem value={"Duration"} />
              <TableItem value={"APR"} />
          </div>
          {
              items.length > 0 ? <></> : (
                  <div className={"w-full h-[300px] flex justify-center items-center"}>
                      <span className={"text-xl font-medium"}>There is no your position yet. Be sure that you connected a wallet</span>
                  </div>
              )
          }
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
        <div className={cn("h-full w-full flex justify-center items-center", className)}>
            { value }
        </div>
    )
}