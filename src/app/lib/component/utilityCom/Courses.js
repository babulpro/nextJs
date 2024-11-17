"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Courses = () => {
    const [Data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await fetch("/api/getData/course", { cache: "force-cache" });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setData(data.data); // Ensure data has correct structure
            } catch (err) {
                setError(err.message);
            }
        };

        fetchHeroData();
    }, []);

    return (
         
                <div className="container font-Noto m-auto bg-slate-800 py-10">
                    <div className="lg:w-4/5 m-auto bg-slate-800">
                        <div className="">
                            <div className="pt-6 text-center text-slate-300 capitalize pb-6">
                                <h1 className="font-serif text-2xl underline font-bold">Popular Courses</h1>
                                <p>Update your skills with the newest courses</p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-3 px-2">
                            {error && <p className="text-red-500">{error}</p>}
                            {Data.length > 0 && Data.slice(1, 5).map((value, index) => (
                                <div key={value._id } className="w-full text-center lg:mt-11 mt-4 lg:p-4 p-1 shadow-2xl">
                                    <div className="p-2 w-full rounded-lg ">
                                        <Image
                                            width={500}
                                            height={300}
                                            src={value.img}
                                            alt="course images"
                                            priority={true}
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h1 className="my-2 underline text-slate-300 text-2xl">{value.name}</h1>
                                        <p>{value.des}</p>
                                    </div>
                                    <div className="flex justify-left mt-5 gap-3 py-3 transition-all">
                                        <Link
                                            href={`/dashboard/pages/courses/${value._id}`}
                                            className="inline-block px-2 py-1 border rounded-lg hover:bg-slate-500 hover:border-pink-200"
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
      
    );
};

export default Courses;
