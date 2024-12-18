"use client"
import React from 'react';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image';
 

const Page = () => {
    const [Data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await fetch("/api/getData/course",{cache:"force-cache"});

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setData(data.data); // Assuming the API sends `{ status: "ok", data: [...] }`
            } catch (err) {
                console.error("Error fetching hero data:", err);
                setError(err.message);
            }
        };

        fetchHeroData();
    }, []);

    return (
        <div>
            <div className="mt-10 ">
                <div className="container m-auto bg-slate-800 py-10 ">
                    
                
                        <div className="w-4/5 m-auto bg-slate-800 ">
                            <div className="pt-6 text-center text-slate-300 capitalize pb-6">
                                <h1 className="font-serif text-2xl underline font-bold">propular courses</h1>
                                <p>Update your skills with newest courses</p>
                            </div>
                            
                        </div>

                        <div className="grid lg:grid-cols-2 gap-3 ">
                            {
                                    Data.length>0 &&
                                    Data.map((value,index)=>{
                                        return(
                                            <div key={index} className="w-full  mt-11 p-4 shadow-2xl ">
                                                <Image width={500} height={300} className="p-2 m-0 h-[270px]  w-full rounded-lg" src={value.img} alt=""/>
                                                <div className="text-left ">
                                                <h1 className="my-2 underline text-slate-300 text-2xl ">{value.name}</h1>
                                                <p >{value.des}</p>
                                                </div>

                                                <div className='py-1 px-2 border animate-bounce text-slate-200 mt-5 rounded-xl w-1/5 text-center'>

                                                <Link  href={`/dashboard/pages/course/free/${value.name}`}>Learn Free</Link>
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