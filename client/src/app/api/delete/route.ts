/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { policyId } = data;

    await prisma.insurence.delete({
      where: {
        policyId,
      },
    });

    return NextResponse.json({
      status: 200,
      objects: [],
    });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({
      message: e.message,
    });
  }
}
export async function GET() {}
