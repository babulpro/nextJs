"use client"
import React from 'react';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image';
 
 

const Courses = () => {

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
                    
                
                        <div  className="w-4/5 m-auto bg-slate-800">
                                    <div className="shadow-xl">
                                        <div className="pt-6 text-center text-slate-300 capitalize pb-6">
                                            <h1 className="font-serif text-2xl underline font-bold">propular courses</h1>
                                            <p>Update your skills with newest courses</p>
                                        </div>
                                        
                                    </div>

                                    <div className="grid lg:grid-cols-2 gap-3 ">
                                        {
                                                Data.length>0 &&
                                                Data.slice(1,5).map((value,index)=>{
                                                    return(
                                                        <div className="w-full text-center mt-11 p-4 shadow-2xl ">
                                                        <Image width={500} height={300} className="p-2 m-0 h-[270px]  w-full rounded-lg" src={value.img} alt=""/>
                                                        <div className="text-left ">
                                                        <h1 className="my-2 underline text-slate-300 text-2xl ">{value.name}</h1>
                                                        <p >{value.des}</p>
                                                        </div>
                                                        
                                                        <div className="flex justify-left mt-5 gap-3 py-3 transition-all ">
                                                        <Link href={`/dashboard/pages/courses/${value.name}` }class="inline-block px-2 py-1 border rounded-lg hover:bg-slate-500 hover:border-pink-200">Details</Link>
                                                        </div>
                                                    </div>
                                                    )
                                                })
                                        }
                            
                                            
                                    </div>
                        </div>

                        

                        
                </div>
            </div>

        </div>
    );
};

export default Courses;