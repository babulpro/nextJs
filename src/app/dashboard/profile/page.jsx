"use client"

import { useState } from "react"
import {useRouter} from 'next/navigation'



export default function Page(){




    const initValue={
        mobile:"",
        city:"",
        street:"",
        post:""
    }
    
    const [data,setData]=useState({...initValue})
    const router= useRouter()
    

    const InputChange =(name,value)=>{
        setData(pre=>({
            ...pre,
            [name]:value
        }))
    }

   

    const FormSubmitHandler=async(e)=>{
        e.preventDefault()
        if(data.city.length===0){
            alert("please enter the city")
        }
         
        try{
            const config = {method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}
            let response  = await fetch("/api/User",config,{cache:"force-cache"})
            let json = await response.json()
           
             
            if(json['status'] =="ok"){
                
                router.replace("/dashboard")
            }
            else{
                alert(json['msg'])
            }
        }
        catch(e){
            throw new Error("Something went wrong")
        }
    }
 
    return(
        <div className="w-full  min-h-1/2 items">
            <div className="w-1/2 auto p-8 m-auto shadow-2xl">
                    <form onSubmit={FormSubmitHandler}>
                         
                        <label for="mobile">Enter Your Mobile Number</label><br/>
                        <input type='text' placeholder='+019......' value={data.email} name="mobile" onChange={(e)=>InputChange(e.target.name,e.target.value)} className="inputClass" id="mobile"/> <br/><br/>
                        <label for="city">Enter Your City</label><br/>
                        <input type='text' placeholder='Dhaka' value={data.city} name="city" onChange={(e)=>InputChange(e.target.name,e.target.value)} className="inputClass" id="city"/> <br/><br/>
                        <label for="post">Enter Your Post</label><br/>
                        <input type="text" placeholder="mohakhli" value={data.post} name="post" onChange={(e)=>InputChange(e.target.name,e.target.value)} className="inputClass" id="post"/> <br/>
                        <label for="street">Enter Your street</label><br/>
                        <input type="text" placeholder="3/4 lake " value={data.street} name="street" onChange={(e)=>InputChange(e.target.name,e.target.value)} className="inputClass" id="street"/> <br/>
                        <div className=" md:w-2/3 m-auto md:flex md:justify-between mt-8 ">
                         <input type='submit' value='Update' className="px-3 py-1 hover:text-slate-500 "/><br/>
                         
                         
                        </div>
                    </form>
            </div>
        </div>
    )
}