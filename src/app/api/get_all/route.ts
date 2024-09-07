import { prisma } from "@/lib/prisma/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST() {}

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const wallet = searchParams.get("wallet") || "";

        const result = await prisma.insurence.findMany({
            where: {
                owner: wallet
            }
        });

        return NextResponse.json({
            status: 200,
            objects: result,
        });
    } catch (e: any) {
        console.log(e);
        return NextResponse.json({
            message: e.message,
        });
    }
}
