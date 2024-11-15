 
import { cookies } from 'next/headers';
import dbConnect from "@/app/lib/db/db"; 
import { NextResponse } from "next/server";  
import News from '@/app/lib/db/model/newsletter/News';

export async function POST(req, res) {
    const data = await req.json(); 

    await dbConnect();

    try {
       
        const newReview = new News({...data});

       
        await newReview.save();

  
        const response = NextResponse.json({ msg: "NewsLetter success", status: "ok" });
        
        return response;
    } catch (error) {
       
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(req) {
    await dbConnect();

    try {
        const heroes = await News.find({});
        return NextResponse.json({ status: "ok", data: heroes }); // Remove [0] to return all items
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
    }
}
