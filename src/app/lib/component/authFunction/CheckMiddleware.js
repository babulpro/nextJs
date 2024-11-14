import { NextResponse } from "next/server";
import { DecodedJwtToken } from "./JwtHelper";
 ;
 

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
 

}
