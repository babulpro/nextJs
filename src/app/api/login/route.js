 
import dbConnect from "@/app/lib/db";
import User from "@/app/model/User";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { CreateJwtToken } from "@/app/lib/authFunction/JwtHelper";
import { cookies } from 'next/headers';

export async function POST(req, res) {
    const data = await req.json();
    const email = data.email;

    await dbConnect(); // Ensure DB connection

    try {
        if (!email) {
            return NextResponse.json({ msg: "Invalid email" }, { status: 400 });
        }

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ msg: "Invalid email or password", status: "false" }, { status: 404 });
        }

        // Verify password
        const match = await bcrypt.compare(data.password, user.password);

        if (!match) {
            return NextResponse.json({ msg: "Invalid email or password", status: "false" }, { status: 404 });
        }

        // Create JWT token
        const token = await CreateJwtToken(user.email);

        // Set the token in an HTTP-only cookie
        const response = NextResponse.json({ msg: "Login successful", status: "ok" });
        response.cookies.set({
            name: 'token',
            value: token,
            httpOnly: true,   // HTTP-only flag to prevent access from JavaScript
            secure: true,  // Ensure secure cookies in production
            sameSite: 'strict',  // Protect against CSRF attacks
            path: '/',  // Cookie accessible throughout the application
            maxAge: 60 * 60 * 24 * 7  // Valid for one week
        });

        return response;

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(req) {
    cookies().delete('token')
    return NextResponse.json({
        msg:"request Completed",status:"ok"
    })    
}