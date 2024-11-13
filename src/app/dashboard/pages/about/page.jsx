import getData from '@/app/lib/component/ServerCom/getData';
import React from 'react';
 



const Page = async() => {
 
             let data= await getData("about")
             
     

    return (
        <div className="mt-10">
            <div className="container m-auto bg-slate-800 py-10">
                <div className="text-center text-slate-300 capitalize">
                    <h1 className="font-serif text-2xl font-bold underline">About Us</h1>
                    <p>Explore All About Our Programme</p>
                </div>

                <div className="container m-auto my-14">
                    <div className="grid gap-3 w-4/5 m-auto">
                        {
                            !data.length ? (
                                <p>Loading...</p>
                            ) : (
                                data.map((value, index) => (
                                    <div key={index} className="rounded-lg shadow-xl bg-slate-700 text-slate-400">
                                        <div className="flex flex-col p-3 py-10 lg:px-5">
                                            <h1 className="w-10 h-10 p-2 text-center rounded-full bg-slate-950">{index + 1}</h1>
                                            <h1 className="mt-3 text-xl capitalize underline lg:text-2xl">{value.name}</h1>
                                            <p className="mt-2 text-sm text-justify lg:text-lg">{value.shortDes}</p>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
