// import dbConnect from "@/app/lib/db";
// import course from "@/app/model/course/course";
 
// import Course from "@/app/model/course";
 
import dbConnect from "@/app/lib/db/db";
import course from "@/app/lib/db/model/course/course";
import { NextResponse } from "next/server";

export async function GET(req) {
    await dbConnect();

    try {
        const heroes = await course.find({});
        return NextResponse.json({ status: "ok", data: heroes }); // Remove [0] to return all items
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
    }
}
