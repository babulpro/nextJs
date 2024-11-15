"use client"

import { useState } from "react"
import {useRouter} from 'next/navigation'
import toast from "react-hot-toast"



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
            const config = {method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}
            let response  = await fetch("/api/User",config,{cache:"force-cache"})
            let json = await response.json()
           
             
            if(json['status'] =="ok"){
                toast.success('Successfully Updated!')
                router.replace("/dashboard/pages/about")
            }
            else{
                toast.error('Login First!')
            }
        }
        catch(e){
            toast.error('Login First!')

        }
    }
 
    return(
        <div className="container m-auto">
            <div className="w-4/5 auto lg:p-8  p-3 m-auto shadow-2xl">
                    <form onSubmit={FormSubmitHandler}>
                         
                        <label htmlFor="mobile">Enter Your Mobile Number</label><br/>
                        <input type='text' placeholder='+019......' value={data.email} name="mobile" onChange={(e)=>InputChange(e.target.name,e.target.value)} className="inputClass" id="mobile"/> <br/><br/>
                        <label htmlFor="city">Enter Your City</label><br/>
                        <input type='text' placeholder='Dhaka' value={data.city} name="city" onChange={(e)=>InputChange(e.target.name,e.target.value)} className="inputClass" id="city"/> <br/><br/>
                        <label for="post">Enter Your Post</label><br/>
                        <input type="text" placeholder="mohakhli" value={data.post} name="post" onChange={(e)=>InputChange(e.target.name,e.target.value)} className="inputClass" id="post"/> <br/>
                        <label for="street">Enter Your street</label><br/>
                        <input type="text" placeholder="3/4 lake " value={data.street} name="street" onChange={(e)=>InputChange(e.target.name,e.target.value)} className="inputClass" id="street"/> <br/>
                        <div className="mt-8 ">
                         <input type='submit' value='Update' className="p-1  hover:text-slate-500 "/><br/>
                         
                         
                        </div>
                    </form>
            </div>
        </div>
    )
}