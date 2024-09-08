"use client";
import { Header, TableComponent, SubmitForm, BGImage } from "@/components";
import {useQuery} from "@tanstack/react-query";
import {useAccount} from "wagmi";

export default function Home() {
  const account = useAccount();
  const { data: list = [], refetch } = useQuery({
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
      className={
        "w-full min-h-screen top-0 overflow-hidden scroll-smooth relative"
      }
    >
      <BGImage />
      <Header />

      <div className={"w-full min-h-screen p-32 z-10 pt-20 relative"}>
        <div
          className={
            "w-full h-full border rounded-2xl bg-white px-24 py-12 flex flex-col shadow-lg"
          }
        >
          {/* Form Component */}
          <SubmitForm refetch={refetch}/>

          {/* Separator */}
          <div className="mt-32 mb-24 flex items-center justify-center">
            <hr className="w-full border-t-2 border-gray-300" />
          </div>

          {/* Table Component */}
          <TableComponent list={list} refetch={refetch}/>
        </div>
      </div>
    </div>
  );
}
