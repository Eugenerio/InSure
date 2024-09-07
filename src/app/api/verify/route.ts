import { type IVerifyResponse, verifyCloudProof } from "@worldcoin/idkit";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { proof, signal } = data;
    const app_id = process.env.WC_APP_ID as `app_${string}`;
    const action = "verify";

    const verifyRes = (await verifyCloudProof(
      proof,
      app_id,
      action!,
      signal,
    )) as IVerifyResponse;

    if (verifyRes.success) {
      // This is where you should perform backend actions if the verification succeeds
      // Such as, setting a user as "verified" in a database
      return NextResponse.json(verifyRes);
    } else {
      // This is where you should handle errors from the World ID /verify endpoint.
      // Usually these errors are due to a user having already verified.
      return NextResponse.json(verifyRes);
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      type: "error",
    });
  }
}
