 
import { NextResponse } from "next/server"
import { CheckCookies } from "./app/lib/component/authFunction/CheckMiddleware"
import { clerkMiddleware } from "@clerk/nextjs/server";
 
 
    export   function middleware(req,res,next){
        if(req.nextUrl.pathname.startsWith("/dashboard")){
            return CheckCookies(req)
           
         }
         return NextResponse.next()
            
    }

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)','/dashboard/pages/:path*'
  ],
};

 











    // let myCookies = cookies().get("sessionToken")
    // if(!myCookies){
    //     return NextResponse.redirect(new URL("/login", req.url))
    // }
    // return NextResponse.next()
    

    










    //--------------------set Cookie----------------------
    // if(req.nextUrl.pathname.startsWith("/api/auth")){
    //     const response = NextResponse.next()
    //     response.headers.set('Set-Cookie',`token=Babul;Expires=Sun,20 Oct 20024 21:16:00 UTC;Path=/;SameSite=Strict;Secure;Http Only`)
    //     response.headers.set("name","saddam")
    //     return response
    // }

    //-------------------nextResponse--------------------


    // if(req.nextUrl.pathname.startsWith('/api/auth')){
    //     const response = NextResponse.next()
    //     response.headers.set("name","babul")
         
    //     return response
    // }


    //-----------------------NextRequest-----------------------


    // if(req.nextUrl.pathname.startsWith('/api/auth')){
    //     const reqHeaders = new Headers(req.headers);
    //     reqHeaders.set('name','saddam');
    //     return NextResponse.next({request:{headers:reqHeaders}})
    // }
    // if(req.nextUrl.pathname.startsWith('/api/auth')){
    //     const reqHeaders = new Headers(req.headers);
    //     const name= reqHeaders.get('name');
    //     if(!name){
            
    //         return NextResponse.json({msg:"fail"},{status:404})
    //     }
         
    // return NextResponse.next()
    // }
    