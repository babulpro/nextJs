 "use client"

import { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
 



 
 
export default function Hero() {
    
    const [heroData, setHeroData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await fetch("/api/getData/hero",{cache:"force-cache"});

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setHeroData(data.data); // Assuming the API sends `{ status: "ok", data: [...] }`
            } catch (err) {
                console.error("Error fetching hero data:", err);
                setError(err.message);
            }
        };
        

        fetchHeroData();
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

   
 
  return (
       

        <div className="container m-auto mb-14 bg-slate-800 py-10">
            <div className='w-4/5 m-auto p-3'>
            <div className="grid lg:grid-cols-2 gap-5 min-h-1/2 ">
                <div className="shadow-xl "> 
                    <Image
                        src={`/hero/hero.jpg`} alt="Hero Image"
                        width={500}
                        height={400}
                        quality={100} 
                        className="rounded-lg p-2"
                    />

                </div>
                 
                <div className=" text-center text-white shadow-xl flex justify-center items-center py-10">
                               
                               <div>
                                 <h1 className="font-extrabold capitalize">{heroData.name}</h1>
                                     <h5 className="capitalize ">{heroData.surName}</h5>
                                     <div className="mt-2 text-sm">
                                            <p>{heroData.firstPara}
                                            <br />{heroData.secondPara}
                                            <br />
                                            {heroData.thirdPara}
                                            </p>
                                     </div>
                                     
                                         <div className="mt-4 font-bold text-green-900 capitalize lg:mt-8 lg:mr-8">
                                         <Link
                                             className="w-20 px-3 py-1 bg-green-200 rounded-lg lg:w-40 hover:bg-transparent hover:text-white hover:border"
                                             href="/dashboard/pages/course"
                                         >
                                             Distance Learn
                                         </Link>
                                     </div>
                                     
                                </div>
                 </div>
            </div>
            </div>
        </div>
  );
}
