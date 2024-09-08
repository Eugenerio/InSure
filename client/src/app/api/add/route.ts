import { prisma } from "@/lib/prisma/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const {
            policyId,
            amount,
            duration,
            owner
        } = data;

        await prisma.insurence.create({
            data: {
              policyId,
              amount,
              duration,
                owner
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
