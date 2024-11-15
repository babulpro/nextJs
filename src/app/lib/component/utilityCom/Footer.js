 'use client'
 import React, { useState } from 'react';
 import Link from 'next/link'
import toast from 'react-hot-toast';
 
 const Footer = () => {
    const initValue={email:""}
    
    
    const [data,setData]=useState({...initValue})
    
    

    const InputChange =(name,value)=>{
        setData(pre=>({
            ...pre,
            [name]:value
        }))
    }

    
    const FormSubmitHandler = async (e) => {
        e.preventDefault();   
         
            try {
                const config = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                };
    
                const response = await fetch("/api/getData/news", config, { cache: "no-cache" });
    
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
    
                const json = await response.json();
    
                if (json.status === "ok") {
                    toast.success('Thank You for NewsLetter!')
                    setData(initValue)
                     
                }
            } catch (error) {
                toast.error("Already Registered")
            }
        }
    
    

    return (
         <div className="container m-auto bg-slate-800  ">
            <div className="lg:w-4/5 m-auto py-10 shadow-2xl px-5">
                <div className=" lg:flex lg:justify-between">

                <div className="flex flex-col col-span-2 mt-6 ">
                    <h1 className="font-extrabold  ">Headquarter</h1>
                    <address>
                        100 daught a building,<br/>
                        line 3/104, banani
                    </address>
                   
                    <div className='mt-10'>
                        <h1>Copyright @2024 Distance Learning</h1>
                        <h1> Distance Learning</h1>
                    </div>
                </div>


        
                <div className="flex flex-col col-span-2 mt-6 ">
                    <h1 className="font-extrabold mb-3 ">Newsletter Signup</h1>
                    <form onSubmit={FormSubmitHandler} className="shadow-2xl py-10 px-5">
                        <input type="email" onChange={(e)=>InputChange("email",e.target.value)} className="w-full px-2 py-2 bg-slate-600 text-slate-200 rounded-xl text-center outline-none"  placeholder="Email" />
                        <input type="submit" value="Registrtion"  className="w-full  px-2 py-1 hover:text-slate-600 mt-3 text-center rounded-xl  bg-slate-700"/>
                         
                    </form>
                    
                    
                </div>


                <div className="flex flex-col col-span-2 mt-6  ">
                    <div >
                        <h1 className="font-extrabold  ">Contact Info</h1>
                    <p>+65 3333 5435<br/> +65 3443 3233</p>
                    <a href="#">babul1946@gmail.com</a>
                    </div>

                    <h1 className="font-extrabold  mt-7 ">Quick Links</h1>
                    <ul>
                        <li><Link href="/dashboard/pages/course">Course</Link></li>
                        <li><Link href="/dashboard/pages/calender">Calender</Link></li>
                        <li><Link href="/dashboard/pages/terms">Terms & condition</Link></li>
                    </ul>

                </div>

            </div>
            </div>
         </div>
         
         
    )
 }
 
 export default Footer;