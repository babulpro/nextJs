import { NextResponse } from "next/server";
import { DecodedJwtToken } from "@/app/lib/authFunction/JwtHelper";
import { cookies } from 'next/headers';

export async function CheckCookies(req) {
  try{
    let token= req.cookies.get('token')
    let payload = await DecodedJwtToken(token['value']);
    const requestHeaders = new Headers(req.headers)
    requestHeaders.set('email',payload['email'])
    return NextResponse.next({
      request:{headers:requestHeaders}
    }) 
 
  }
  catch(e){
    return NextResponse.redirect(new URL('/login',req.url))
  }

     
    // const cookieStore = cookies(); 
    // let token = cookieStore.get('token');
     

  
    // if (!token) {
    //   return NextResponse.redirect(new URL('/login', req.url));
    // }

     
    // let payload = await DecodedJwtToken(token.value); 
 

    
    // const reqHeader = new Headers(req.headers);
    // reqHeader.set('email', payload.email);
     
 
    // return NextResponse.next({
    //   request: { headers: reqHeader }
    // });

}
