import React from 'react';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className="">
            <div className="container m-auto bg-slate-800 py-10">
                        <div className="w-4/5 m-auto bg-slate-800 underline ">
                            <div className="pt-6 text-center text-slate-300 capitalize pb-6">
                                <h1 className="font-serif text-2xl font-bold">Do You Have Any Query ?</h1>
                                <p>Any time any where</p>
                            </div>
                            
                        </div>
                <div className="grid lg:grid-cols-2 gap-8 w-4/5 m-auto ">
                    <div className=" w-full pb-5 shadow-2xl flex items-center justify-center">
                        <form className="px-3 w-full py-4 text-slate-300">
                            <h1 className="text-2xl font-bold capitalize underline">To Anything About us.</h1>
                            <p className="text-xs my-2">We love conversations. Lets talk!</p>
                            
                            <input
                                className="w-full px-2 py-1 my-2 text-slate-400 bg-slate-700 rounded-md outline-none "
                                type="text"
                                placeholder="Name"
                            /><br />
                            
                            <input
                                className="w-full  px-2 py-1 my-2 text-slate-400 bg-slate-700  rounded-md outline-none"
                                type="email"
                                placeholder="Email"
                            /><br />
                            
                            <textarea className="w-full  px-2 py-1 my-2 text-slate-400 bg-slate-700 rounded-md outline-none"
                                cols="30"
                                rows="5"
                                placeholder="message here"
                            ></textarea><br/>
                            
                            <input type="submit" className="inline-block px-3 py-1 mt-2 bg-slate-600 hover:bg-slate-500 rounded-xl" vlaue="Send"/>
                                 
                          
                        </form>
                    </div>
        
                    <div className="my-4 rounded-xl p-4 mt-12">
                        <Image width={500} height={300} className="" src="/m.webp" alt="Contact Us" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
