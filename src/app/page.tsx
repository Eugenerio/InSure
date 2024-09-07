"use client";
import { BGImage, Header, TableComponent, SubmitForm } from "@/components";

export default function Home() {
  return (
    <div
      className={
        "w-full min-h-screen top-0 overflow-hidden scroll-smooth relative"
      }
    >
      <BGImage />
      <Header />
      <div className={"w-full min-h-screen p-12 z-10 pt-20"}>
        <div
          className={
            "w-full h-full border rounded-2xl bg-white px-24 py-12 flex flex-col"
          }
        >
          <SubmitForm />
          <TableComponent />
        </div>
      </div>
    </div>
  );
}
