"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
 

const Contact = () => {
     const initValue ={name:"",email:"",message:""}
    
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
    
                const response = await fetch("/api/getData/query", config, { cache: "no-cache" });
    
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
    
                const json = await response.json();
    
                if (json.status === "ok") {
                    toast.success('Thank you for your Query')
                    setData(initValue)
                }
            } catch (error) {
                toast.error("Pending your query.")
            }
        }
 
    return (
        <div className="">
            <div className="container m-auto bg-slate-800 py-10">
                        <div className="w-4/5 m-auto bg-slate-800 underline ">
                            <div className="pt-6 text-center text-slate-300 capitalize pb-6">
                                <h1 className="font-serif text-2xl font-bold">Do You Have Any Query ?</h1>
                                <p>Any time any where</p>
                            </div>
                            
                        </div>
                <div className="grid lg:grid-cols-2 gap-8 w-4/5 m-auto shadow-2xl ">
                    <div className=" w-full pb-5 flex items-center justify-center">
                        <form onSubmit={FormSubmitHandler} className="px-3 w-full py-4 text-slate-300">
                            <h1 className="text-2xl font-bold capitalize underline">To Anything About us.</h1>
                            <p className="text-xs my-2">We love conversations. Lets talk!</p>
                            
                            <input
                                className="w-full px-2 py-1 my-2 text-slate-400 bg-slate-700 rounded-md outline-none "
                                type="text" value={data.name} onChange={(e)=>InputChange("name",e.target.value)}
                                placeholder="Name"
                            /><br />
                            
                            <input
                                className="w-full  px-2 py-1 my-2 text-slate-400 bg-slate-700  rounded-md outline-none"
                                type="email"
                                placeholder="Email" value={data.email} onChange={(e)=>InputChange("email",e.target.value)}
                            /><br />
                            
                            <textarea className="w-full  px-2 py-1 my-2 text-slate-400 bg-slate-700 rounded-md outline-none"
                                cols="30"
                                rows="5"
                                placeholder="message here"
                                value={data.message} onChange={(e)=>InputChange("message",e.target.value)}
                            /><br/>
                            
                            <input type="submit" className="inline-block px-3 py-1 mt-2 bg-slate-600 hover:bg-slate-500 rounded-xl" vlaue="Send"/>
                                 
                          
                        </form>
                    </div>
        
                    <div className="lg:my-4 rounded-xl p-4 lg:mt-12">
                        <Image width={500} height={300} className="" src="/m.webp" alt="Contact Us" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
