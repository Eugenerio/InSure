"use client";
import { Header, TableComponent, SubmitForm } from "@/components";

export default function Home() {
  return (
    <div
      className={
        "w-full min-h-screen top-0 overflow-hidden scroll-smooth relative"
      }
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-cyan-500 to-violet-500 blur-2xl z-0"></div>

      <Header />
      <div className={"w-full min-h-screen p-12 z-10 pt-20 relative"}>
        <div
          className={
            "w-full h-full border rounded-2xl bg-white px-24 py-12 flex flex-col"
          }
        >
          <SubmitForm />
          <div className="mt-32 flex items-center justify-center">
            <hr className="w-full border-t-2 border-gray-300" />
          </div>
          <TableComponent />
        </div>
      </div>
    </div>
  );
}
