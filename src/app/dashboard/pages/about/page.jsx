 "use client"
import { useEffect, useState } from 'react'
import React from 'react';
import Image from 'next/image';
  

 
const Page = () => {

    const [AboutData, setAboutData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await fetch("/api/getData/about",{cache:"force-cache"});

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setAboutData(data.data); // Assuming the API sends `{ status: "ok", data: [...] }`
            } catch (err) {
                console.error("Error fetching hero data:", err);
                setError(err.message);
            }
        };

        fetchHeroData();
    }, []);
    return (
        <div className="">
            <div className="container m-auto bg-slate-800 py-10 ">
            
                <div >

                    <div className="text-center text-slate-300 capitalize ">
                        <h1 className="font-serif text-2xl font-bold underline">About Us</h1>
                        <p>Explore All About Our Programme</p>
                    </div>
                </div>

    
                <div className="container my-14 m-auto">
                    <div className="grid lg:grid-cols-2 gap-3 lg:w-4/5 m-auto">

                    {
                                AboutData.length>0 &&
                                AboutData.map((value,index)=>{
                                    return(
                                        <div key={index} className="rounded-lg shadow-xl bg-slate-700 text-slate-400">
                                                <div className="flex flex-col p-3 py-10 lg:px-5">
                                                    <h1 className="w-10 h-10 p-2 text-center   rounded-full bg-slate-950 ">{index+1}</h1>
                                                    <h1 className="mt-3 text-xl capitalize underline">{value.name}</h1>
                                                    <p className="mt-2 text-justify">{value.shortDes}</p>
                                                </div>
                                         </div>
                                    )
                                })
                        }

                         
                    </div>
                </div>

 

                
             </div>
        </div>
                
            
        
    
    );
};

export default Page;