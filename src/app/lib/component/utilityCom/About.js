"use client"
import { useEffect, useState } from 'react'
import React from 'react';
import Image from 'next/image';
import Register from './user/Register';

 


const journeyData=[
    {
        name:"professional trainers",
        Des:"Expert-led guidance for real-world skills mastery",
        img:"images/teacher.png"
    },
    {
        name:"international certification",
        Des:"Globally recognized credentials to boost your career",
        img:"images/book.png"
    },
    {
        name:"free for 3 month",
        Des:"Enjoy premium access, completely free for three months!",
        img:"images/calendar.png"
    },
]

const About = () => {

    const [AboutData, setAboutData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await fetch("/api/getData/aboutSection/about",{cache:"force-cache"});

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
        <div className="mt-10 ">
            <div className="container m-auto bg-slate-800 py-10 ">
            
        
                <div className="text-center text-slate-300 capitalize ">
                    <h1 className="font-serif text-2xl font-bold underline">About Us</h1>
                    <p>Explore All About Our Programme</p>
                </div>

    
                <div className="container m-auto my-14 ">
                    <div className="grid lg:grid-cols-2 gap-3 w-4/5 m-auto">

                    {
                                AboutData.length>0 &&
                                AboutData.map((value,index)=>{
                                    return(
                                        <div key={index} className="rounded-lg shadow-xl bg-slate-700 text-slate-400">
                                                <div className="flex flex-col p-3 py-10 lg:px-5">
                                                    <h1 className="w-10 h-10 p-2 text-center   rounded-full bg-slate-950 ">{index+1}</h1>
                                                    <h1 className="mt-3 text-xl capitalize underline">{value.name}</h1>
                                                    <p className="mt-2 text-sm text-justify  lg:text-md">{value.shortDes}</p>
                                                </div>
                                         </div>
                                    )
                                })
                        }

                         
                    </div>
                </div>

 

                <div className="container m-auto my-14">
                    <div className=" w-4/5 m-auto bg-slate-700 text-slate-300">
                        <h1 className="py-6 font-extrabold underline text-2xl capitalize text-center px-2">stay your journey to a batter life with online practical courses</h1>

                    
                    <div className="grid lg:grid-cols-2 gap-3">

                    


                        <div className="w-full">
                            <div className="px-1 py-4 shadow-md  ">
                               


                              {
                                journeyData.length>0 &&
                                journeyData.map((value,index)=>{
                                    return(
                                        <div key={index} className="flex justify-left mb-5 shadow-2xl py-5">

                                    
                                            <div className="mr-5 w-12 h-12 lg:mr-8 lg:w-20 lg:h-20 p-1 lg:p-2 "> 
                                                <Image width={500} height={300} alt="png ImageS" className="rounded-full p-1" src={`/${value.img}`}/>
                                            </div>

                                            <div className="">
                                                <h1 className="font-extrabold capitalize lg:text-xl">{value.name}</h1>
                                                <p className="px-4 text-justify ">{value.Des}</p>
                                            </div>
                                         </div>
                                    )
                                })
                              }
                                


                            </div>
                        </div>
                
    
    

                       <div className="flex items-center justify-center bg-transparent pb-5 md:pb-1 " >
                             <Register/>
                       </div>

                        </div>


                    </div>

                    </div>
             </div>
        </div>
                
            
        
    
    );
};

export default About;