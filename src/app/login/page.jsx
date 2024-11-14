"use client"

import {  useState } from "react"
import {useRouter} from 'next/navigation'
import Link from 'next/link'


export default function Page(){




    
    const [data,setData]=useState({email:"",password:""})
    const router= useRouter()
    

    const InputChange =(name,value)=>{
        setData(pre=>({
            ...pre,
            [name]:value
        }))
    }

    
    const FormSubmitHandler = async (e) => {
        e.preventDefault();
    
        if (data.email.trim() === "") {
            alert("Please enter a valid email.");
        } else if (data.password.trim() === "") {
            alert("Please enter a valid password.");
        } else {
            try {
                const config = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                };
    
                const response = await fetch("/api/login", config, { cache: "no-cache" });
    
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
    
                const json = await response.json();
    
                if (json.status === "ok") {
                    
                    alert("login success")
                    window.location.replace("/")
                } else {
                    router.replace("/login");
                }
            } catch (error) {
                alert("An error occurred: " + error.message);
            }
        }
    };
    
 
    return(
        <div className="container m-auto bg-slate-700 min-h-1/2 items">
            <div className="w-4/5   py-10">
                <div className="w-2/3 auto p-8 m-auto shadow-2xl">
                        <form onSubmit={FormSubmitHandler}>
                            <label for="email">Enter Your Valid Email</label><br/>
                            <input type='email' placeholder='email' value={data.email} onChange={(e)=>InputChange("email",e.target.value)} className="inputClass text-left" id="email"/> <br/><br/>
                            <label for="password">Enter Your Valid Email</label><br/>
                            <input type="password" placeholder="password" value={data.password} onChange={(e)=>InputChange("password",e.target.value)} className="inputClass" id="password"/> <br/>
                            <div className=" md:w-2/3 m-auto md:flex md:justify-between mt-8 ">
                            <input type='submit' value='login' className="px-3 py-1 hover:text-slate-500 hover:animate-bounce "/><br/>
                            <Link href="/login/registration" className="text-xs px-3 py-1 hover:text-slate-500 shadow-2xl">Don't have account?</Link>
                            <Link href="/login/forgetpassword" className="text-xs px-3 py-1 hover:text-slate-500 shadow-2xl">Forget password?</Link>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}