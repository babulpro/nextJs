import dbConnect from "@/app/lib/db/db";
 
import { NextResponse } from "next/server";
import  HeroData  from '@/app/lib/db/model/Hero/Hero';
 

export async function GET(req) {
    await dbConnect();

    try {
        const heroes = await HeroData.find({});
        return NextResponse.json({ status: "ok", data: heroes }); // Remove [0] to return all items
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
    }
}
