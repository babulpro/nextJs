import { CreateJwtToken } from "./JwtHelper";

 export async function TokenCookies(email) {
    let token = await CreateJwtToken(email);
    return {'Set-Cookie':`token= ${token};Max-Age=7200;Secure;HttpOnly,Path=/;SameSite=Strict`}
    
 }