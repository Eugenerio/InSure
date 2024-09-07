import { prisma } from "@/lib/prisma/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST() {}

export async function GET() {
    try {
        const result = await prisma.insurence.findMany();

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
