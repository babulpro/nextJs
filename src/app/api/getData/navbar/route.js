import dbConnect from "@/app/lib/db/db";
import navData from "@/app/lib/db/model/navbar/navbar";
 
import { NextResponse } from "next/server";



export async function GET(req) {
    await dbConnect();

    try {
        const heroes = await navData.find({});
        return NextResponse.json({ status: "ok", data: heroes});
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
    }
}
