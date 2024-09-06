"use client";
import {BGImage, Header} from "@/components";

import {IDKitWidget, ISuccessResult, VerificationLevel} from '@worldcoin/idkit'
import {Button} from "@/components/ui/button";
import {toast} from "react-toastify";



export default function Home() {
    const onSuccess = () => {
        console.log("HELLO HERE VERIFIED PERSON");
    }


    const handleVerify = async (proof: ISuccessResult) => {
       try {
           const res = await fetch("/api/verify", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify(proof),
           })
           if (!res.ok) {
               throw new Error("Verification Failed");
           }
       } catch (e) {
           console.log(e);
           toast("Verification Failed", {
               type: "error"
           })
       }
    };

    return (
      <div className={"w-full h-screen overflow-hidden scroll-smooth"}>
          <BGImage />
          <Header />
          <div className={"w-full min-h-screen p-12 z-10 pt-20"}>
              <div className={"w-full h-full border rounded-2xl bg-white p-24 flex flex-col"}>
                  <div className={"h-full"} id={"form"}>
                      <IDKitWidget
                          app_id={process.env.WC_APP_ID as `app_${string}`}
                          action="vote_1"
                          signal="user_value" // any arbitrary value the user is committing to, e.g. a vote
                          onSuccess={onSuccess}
                          handleVerify={handleVerify}
                          verification_level={VerificationLevel.Device} // minimum verification level accepted, defaults to "orb"
                      >
                          {({ open }) => <Button onClick={open}>Verify with World ID</Button>}
                      </IDKitWidget>
                  </div>
                  {/*<div className={"h-full"} id={"table"}>*/}
                  {/*    {*/}
                  {/*        Array.from(Array(10)).map((item, i) => (*/}
                  {/*            <div className={""} key={`table-item-${i}`}>*/}
                  {/*                Some text {i}*/}
                  {/*            </div>*/}
                  {/*        ))*/}
                  {/*    }*/}
                  {/*</div>*/}
              </div>
          </div>
      </div>
  );
}