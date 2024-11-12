 
import { cookies } from 'next/headers';

import dbConnect from "@/app/lib/db/db";
import Review from "@/app/lib/db/model/review/review";
import { NextResponse } from "next/server";  

export async function POST(req, res) {
    const data = await req.json();  // Get the JSON data from the request body

    await dbConnect(); // Ensure DB connection

    try {
        // Create a new review document in the database
        const newReview = new Review({
            name: data.name,
            des: data.des,
            date: data.date,
        });

        // Save the review document to the database
        await newReview.save();

        // Return a successful response
        const response = NextResponse.json({ msg: "Review posted successfully", status: "ok" });
        
        return response;
    } catch (error) {
        // Handle errors and send an error response
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(req) {
    await dbConnect();

    try {
        const heroes = await Review.find({});
        return NextResponse.json({ status: "ok", data: heroes }); // Remove [0] to return all items
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
    }
}
