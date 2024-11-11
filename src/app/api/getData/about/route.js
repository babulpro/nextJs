import dbConnect from "@/app/lib/db/db";
import { NextResponse } from "next/server";
import AboutData from '@/app/lib/db/model/about/about';

export async function GET(req) {
    await dbConnect();

    try {
        console.log("Fetching data...");
        const heroes = await AboutData.find({});
        console.log("Data fetched:", heroes);
        return NextResponse.json({ status: "ok", data: heroes });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
    }
}
