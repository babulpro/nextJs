 
 
import { CreateJwtToken,DecodedJwtToken } from "@/app/lib/component/authFunction/JwtHelper";
import dbConnect from "@/app/lib/db/db";
import User from "@/app/lib/db/model/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  const data = await req.json();

  // Password hashing
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(data.password, salt);
  data.password = hash;
  let email= data.email

  await dbConnect();
  const user = await User.findOne({ email })
  if(!user){
      try {
        const newUser = await User.create({ ...data });
        const token = await CreateJwtToken(email)
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
        return NextResponse.json({ status: "false", msg: error.message }, { status: 400 });
      }

  }
  else{
    return NextResponse.json({ status: "false", msg: "already user" }, { status: 400 });
  }

}

export async function GET(req) {
  await dbConnect();

  try {
    const users = await User.find({});
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ status: "error", msg: error.message }, { status: 400 });
  }
}


export async function PUT(req) {
  const data = await req.json();
  
  

  await dbConnect();

 
  const token =await cookies().get('token');
  if (!token) {
    return NextResponse.json({ status: "false", msg: "Unauthorized" }, { status: 401 });
  }
  const decoded =await DecodedJwtToken(token.value);
  const email = decoded?.email;
  if (!email) {
    return NextResponse.json({ status: "false", msg: "Invalid token" }, { status: 400 });
  }

  try {
    
    const user = await User.findOneAndUpdate(
      { email },
      { $set: { "address.city": data.city, "address.mobile": data.mobile, "address.street": data.street, "address.post": data.post } },
      { new: true }
    );

    if (!user) {
      return NextResponse.json({ status: "false", msg: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ status: "ok", msg: "Address updated successfully", user });
  } catch (error) {
    return NextResponse.json({ status: "error", msg: error.message }, { status: 500 });
  }
}