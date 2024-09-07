"use client";
import { BGImage, Header } from "@/components";

import {
  IDKitWidget,
  IErrorState,
  ISuccessResult,
  VerificationLevel,
} from "@worldcoin/idkit";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useWCContext } from "@/lib/context";
import { SubmitForm } from "@/components/molecules/form";

export default function Home() {
  const { wcSaveAuthData } = useWCContext();

  const onSuccess = () => {
    console.log("HELLO HERE VERIFIED PERSON");
  };

  const handleVerify = async (proof: ISuccessResult) => {
    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(proof),
      });
      const { iv, payload } = await res.json();

      wcSaveAuthData(iv, payload);
      if (!res.ok) {
        throw new Error("Verification Failed");
      }
    } catch (e) {
      console.log(e);
      toast("Verification Failed", {
        type: "error",
      });
    }
  };

  const errorHandler = (e: IErrorState) => {
    toast(e.message, { type: "error" });
  };

  return (
    <div className={"w-full min-h-screen overflow-hidden scroll-smooth"}>
      <BGImage />
      <Header />
      <div className={"w-full min-h-screen p-12 z-10 pt-20"}>
        <div
          className={
            "w-full h-full border rounded-2xl bg-white px-24 py-12 flex flex-col"
          }
        >
          {/*<div className={"h-full"} id={"form"}>*/}
          {/*  <IDKitWidget*/}
          {/*    app_id={process.env.WC_APP_ID as `app_${string}`}*/}
          {/*    action="verify"*/}
          {/*    onSuccess={onSuccess}*/}
          {/*    handleVerify={handleVerify}*/}
          {/*    onError={errorHandler}*/}
          {/*    verification_level={VerificationLevel.Device}*/}
          {/*  >*/}
          {/*    {({ open }) => (*/}
          {/*      <Button onClick={open}>Verify with World ID</Button>*/}
          {/*    )}*/}
          {/*  </IDKitWidget>*/}
          {/*</div>*/}
          <SubmitForm />
        </div>
      </div>
    </div>
  );
}
