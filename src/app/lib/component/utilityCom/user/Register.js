"use client"
 
import React, { useState } from 'react';
import toast from 'react-hot-toast';

// import HandleRegistrationSubmit from './Post';

const Register = () => {
 
    const initData={
        name:"",
        email:"",
        password:""
    }
    const [data,setData]=useState({...initData})

    const HandleChange=(name,value)=>{setData((prev)=>({...prev,[name]:value}))}


    const HandleRegistrationSubmit = async (e) => {
        e.preventDefault();
        
        
        try {
            const config = { method:"POST",headers:{ "Content-Type": "application/json" },body: JSON.stringify(data),};
            let response = await fetch("/api/User", config);
            let json = await response.json();
            if (json.status === "ok") {
                setData({...initData})
                toast.success('You Have Register Successfully !')
                
            } else {
                toast.error("Already Used The Email")
            }
        }
        catch(e){
            console.log(e)
        }
    };


  

    return (
        <div className="items-center lg:p-12 p:8 rounded-full justify bg-slate-600 lg:mr-2 w-64 h-64 lg:w-80 lg:h-80 ">
                                        <form onSubmit={HandleRegistrationSubmit} className="text-center">
                                            <h1 className="font-bold text-center capitalize underline text-xl mt-4 lg:text-2xl lg:mt-0">signup today</h1>
                                            <input className="inputForm" type="text" name='name' value={data.name} placeholder="Name" onChange={(e)=>HandleChange(e.target.name,e.target.value)} required/>
                                            <input className="inputForm" type="email" name="email" value={data.email} placeholder="Email" onChange={(e)=>HandleChange(e.target.name,e.target.value)} required/>
                                            <input class="inputForm" type="password" value={data.password} placeholder="Password " name="password" onChange={(e)=>HandleChange(e.target.name,e.target.value)} required/>

                                            <div className="inline-block px-2 mt-1 text-center text-slate-400 bg-slate-800 rounded-full lg:mt-3 hover:bg-slate-700 hover:text-slate-300">
                                            <input  type="submit" value="Register"/>
                                            </div>
                                        </form>
        </div>
    );
};

export default Register;