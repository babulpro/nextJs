 "use client"

import { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
 



 
const data={
    image:"bg.jpg",
    name:"Distance learning",
    surName:"Education Center",
    firstPara:"Distance learning offers flexible education from any location,",
    secondPara:" using online platforms for accessible,",
    thirdPara:"remote learning experiences."
}

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
        // <div className="container m-auto mb-14  ">
        //     <div className='w-4/5 m-auto pb-10'>
        //     <div className="relative min-h-screen ">
        //         {/* Background Image with Overlay */}
        //         <div className="absolute inset-0 rounded-xl"> babul is here
        //             <Image
        //                 src={`/images/hero/${heroData.image}`} alt="Background Image"
        //                 layout="fill"
        //                 objectFit="cover"
        //                 quality={100}
        //                 className="z-[-1] rounded-xl"
        //             />
        //                 <div className="absolute inset-0 bg-slate-800 bg-opacity-90"></div> 
        //                 </div>

                    
        //                 <div className="relative z-10  ">
        //                 <div className=" text-center text-white min-h-[100vh] w-full flex items-center justify-center">
                               
        //                       <div>
        //                       <h1 className="text-2xl font-extrabold capitalize lg:text-3xl">{heroData.name}</h1>
        //                         <h5 className="text-xl capitalize lg:text-2xl">{heroData.surName}</h5>
        //                         <p className="mt-2">{heroData.firstPara}
        //                         <br />{heroData.secondPara}
        //                         <br />
        //                         {heroData.thirdPara}
        //                         </p>
        //                         <div className="mt-4 font-bold text-green-900 capitalize lg:mt-8 lg:mr-8">
        //                         <Link
        //                             className="w-20 px-3 py-1 bg-green-200 rounded-lg lg:w-40 hover:bg-transparent hover:text-white hover:border"
        //                             href="/dashboard/pages/course"
        //                         >
        //                             Distance Learn
        //                         </Link>
        //                       </div>
                                 
        //                        </div>
        //                 </div>
        //         </div>
        //     </div>
        //     </div>
        // </div>

        <div className="container m-auto mb-14 bg-slate-800 py-10">
            <div className='w-4/5 m-auto p-3'>
            <div className="grid lg:grid-cols-2 gap-5 min-h-1/2 ">
                <div className="shadow-xl "> 
                    <Image
                        src={`/images/hero/${heroData.image}`} alt="Background Image"
                        width={500}
                        height={400}
                        quality={100} 
                        className="rounded-md p-2"
                    />

                </div>
                 
                <div className=" text-center text-white shadow-xl flex justify-center items-center py-10">
                               
                               <div>
                                 <h1 className="text-2xl font-extrabold capitalize lg:text-3xl">{heroData.name}</h1>
                                     <h5 className="text-xl capitalize ">{heroData.surName}</h5>
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
