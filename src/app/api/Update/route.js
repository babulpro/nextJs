import { DecodedJwtToken } from "@/app/lib/component/authFunction/JwtHelper";
import dbConnect from "@/app/lib/db/db";
import User from "@/app/lib/db/model/User";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

 

 
 

 
export async function PATCH(req) {
    const { mobile, street, city, post } = await req.json();
    const cookieStore = cookies(); 
    let token = cookieStore.get('token');
    let payload = await DecodedJwtToken(token.value)
    const email =payload['email']
  if (!email) {
    return NextResponse.json({ status: 'error', msg: 'Not authenticated' }, { status: 401 });
  }

  await dbConnect();
  try {
 
    const updatedUser = await User.findOneAndUpdate(
        { email}, // filter by email instead of userId
        {
          $set: {
            'address.mobile': mobile,
            'address.street': street,
            'address.city': city,
            'address.post': post,
          },
        },
        { new: true } // return the updated document
      );
      
    return NextResponse.json({ message: "User partially updated", status: "ok", updatedUser });
  } catch (error) {
    return NextResponse.json({ status: "error", msg: error.message }, { status: 400 });
  }

   
}
