 
import { cookies } from 'next/headers';

import dbConnect from "@/app/lib/db/db";
import Review from "@/app/lib/db/model/review/review";
import { NextResponse } from "next/server";  
import Query from '@/app/lib/db/model/query/Query';

export async function POST(req, res) {
    const data = await req.json(); 

    await dbConnect();

    try {
       
        const newReview = new Query({...data});

       
        await newReview.save();

  
        const response = NextResponse.json({ msg: "Posted successfully", status: "ok" });
        
        return response;
    } catch (error) {
       
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(req) {
    await dbConnect();

    try {
        const heroes = await Query.find({});
        return NextResponse.json({ status: "ok", data: heroes }); // Remove [0] to return all items
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
    }
}
