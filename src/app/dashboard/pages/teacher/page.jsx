 
import React from 'react';
import Image from 'next/image';
import getData from '@/app/lib/component/ServerCom/getData';
import Link from 'next/link';
 
const Page = async() => {
    
    let Data = await getData("teacher")
 

    return (
        <div className="mt-10 ">
            <div className="container m-auto bg-slate-800  ">
            
        
               <div className='w-4/5 m-auto bg-slate-800 py-10'>
               <div className="pt-6 text-center text-slate-300 capitalize pb-6">
                    <h1 className="font-serif text-2xl underline font-bold">Teachers</h1>
                    <p>meet our professional teacher</p>
                </div>
    
                <div className="grid lg:grid-cols-2 gap-3 ">
                   {
                        Data.length>0 && Data.map((value,index)=>{
                            return(
                                <div key={index} className="w-full text-center mt-11 p-4 shadow-2xl">
                                            <div className="">
                                            <Image width={500} height={300}                                        
                                        src={`/teacher/${value.img}`}
                                        alt="teacher image"
                                        priority
                                         
                                         
                                    />
                                            </div>
                                            <div className="grid gap-3 p-2">
                                                    <div className=" text-left">
                                                            <h1 className="pt-2 text-xl underline ">Name: {value.name}</h1>
                                                            <p className="text-sm"> {value.des}</p>
                                                    </div>
                                                    
                                                    <div className="" >
                                                    <ul className="flex justify-end gap-3 py-3 transition-all">
                                            <li>
                                                <Link key={index}
                                                    href={value.facebook}
                                                    className="inline-block w-7 h-7 p-1 bg-slate-700 rounded-full hover:bg-green-300"
                                                    target="_blank"
                                                >
                                                    <Image width={500} height={300} src={`/social/${value.fImg}`} alt="Facebook"/>
                                                </Link>
                                            </li>
                                            <li  >
                                                <Link key={index}
                                                    href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                                                    className="inline-block w-7 h-7 p-1 bg-slate-700 rounded-full hover:bg-green-300"
                                                    target="_blank"
                                                >
                                                    <Image width={500} height={300} src={`/social/linkedin.png`} alt="LinkedIn"/>
                                                </Link>
                                            </li>
                                            <li  >
                                                <Link key={index}
                                                    href="https://x.com/"
                                                    className="inline-block w-7 h-7 p-1 bg-slate-700 rounded-full hover:bg-green-300"
                                                    target="_blank"
                                                >
                                                    <Image width={500} height={300} src={`/social/${value.tImg}`} alt="Twitter"/>
                                                </Link>
                                            </li>
                                        </ul>
                                                    </div>
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