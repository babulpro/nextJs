import React from 'react';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className="mt-10 ">
            <div className="container m-auto bg-slate-800 py-10">
                        <div className="w-4/5 m-auto bg-slate-800 underline ">
                            <div className="pt-6 text-center text-slate-300 capitalize pb-6">
                                <h1 className="font-serif text-2xl font-bold">Do You Have Any Query ?</h1>
                                <p>Any time any where</p>
                            </div>
                            
                        </div>
                <div className="grid lg:grid-cols-2 gap-3 w-4/5 m-auto ">
                    <div className=" w-full pb-5 shadow-2xl">
                        <form className="px-3 py-4 text-slate-300">
                            <h1 className="text-2xl font-bold capitalize ">To Anything About us.</h1>
                            <p className="text-xs my-2">We love conversations. Let’s talk!</p>
                            
                            <input
                                className="w-2/3 px-2 py-1 my-2 text-slate-400 bg-slate-700 rounded-md outline-none "
                                type="text"
                                placeholder="Name"
                            /><br />
                            
                            <input
                                className="w-2/3 px-2 py-1 my-2 text-slate-400 bg-slate-700  rounded-md outline-none"
                                type="email"
                                placeholder="Email"
                            /><br />
                            
                            <textarea className="w-2/3 px-2 py-1 my-2 text-slate-400 bg-slate-700 rounded-md outline-none"
                                cols="30"
                                rows="5"
                                placeholder="message here"
                            ></textarea><br/>
                            
                            <input type="submit" className="inline-block px-3 py-1 mt-2 bg-slate-600 hover:bg-slate-500 rounded-xl" vlaue="Send"/>
                                 
                          
                        </form>
                    </div>
        
                    <div className="rounded-xl shadow-2xl">
                        <Image width={500} height={300} className="my-4 rounded-sm" src="/images/m.webp" alt="Contact Us" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
