 
import { cookies } from 'next/headers';

import dbConnect from "@/app/lib/db/db";
import User from "@/app/lib/db/model/User";
import { NextResponse } from "next/server";
import  bcrypt  from 'bcrypt';
import { CreateJwtToken } from "@/app/lib/component/authFunction/JwtHelper";

export async function POST(req, res) {
    const data = await req.json();
    
    const email = data.email;

    await dbConnect(); 

    try {
        if (!email) {
            return NextResponse.json({ msg: "Invalid email" }, { status: 400 });
        } 
        const user = await User.findOne({ email });
        

        if (!user) {
            return NextResponse.json({ msg: "Invalid email or password", status: "false" }, { status: 404 });
        }

        const match = await bcrypt.compare(data.password, user.password);

        if (!match) {
            return NextResponse.json({ msg: "Invalid email or password", status: "false" }, { status: 404 });
        }
        
        const token = await CreateJwtToken(user.email);
        const response = NextResponse.json({ msg: "Login successful", status: "ok" });
        response.cookies.set({
            name: 'token',
            value: token,
            httpOnly: true,   
            secure: true,  
            sameSite: 'strict', 
            path: '/',  
            maxAge: 60 * 60 * 24 * 7 
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