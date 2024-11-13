import dbConnect from "@/app/lib/db/db";
import { NextResponse } from "next/server";
import AboutData from '@/app/lib/db/model/about/about';

export async function GET(req) {
    await dbConnect();

    try {
         
        const heroes = await AboutData.find();
         
        return NextResponse.json({ status: "ok", data: heroes });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
    }
}
