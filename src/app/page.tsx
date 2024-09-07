"use client";
import { Header, TableComponent, SubmitForm, BGImage } from "@/components";

export default function Home() {
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
          <SubmitForm />

          {/* Separator */}
          <div className="mt-32 mb-24 flex items-center justify-center">
            <hr className="w-full border-t-2 border-gray-300" />
          </div>

          {/* Table Component */}
          <TableComponent />
        </div>
      </div>
    </div>
  );
}
