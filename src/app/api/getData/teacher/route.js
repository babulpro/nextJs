import dbConnect from "@/app/lib/db/db"; 
 
import teacher from "@/app/lib/db/model/teacher/teacher";
 
import { NextResponse } from "next/server";

 

export async function GET(req) {
    await dbConnect();

    try {
        const heroes = await teacher.find({});
        return NextResponse.json({ status: "ok", data: heroes }); // Remove [0] to return all items
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
    }
}
