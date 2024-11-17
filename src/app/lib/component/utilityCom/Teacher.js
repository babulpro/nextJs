"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Teacher = () => {
    const [Data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await fetch("/api/getData/teacher", { cache: "force-cache" });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setData(data.data);
            } catch (err) {
                console.error("Error fetching hero data:", err);
                setError(err.message);
            }
        };

        fetchHeroData();
    }, []);

    return (
        <div className=" font-Geist">
            <div className="container m-auto bg-slate-800">
                <div className="lg:w-4/5 m-auto bg-slate-800 lg:py-10 py-2">
                    <div className="pt-6 text-center text-slate-300 capitalize lg:pb-6 pb-2">
                        <h1 className="font-serif text-2xl underline font-bold">Teachers</h1>
                        <p>Meet our professional teachers</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-3">
                        {Data.length > 0 && Data.slice(0, 4).map((value, index) => (
                            <div key={index} className="w-full text-center lg:mt-11 lg:p-4 mt-4 p-2 shadow-2xl">
                                <div className="p-2  w-full rounded-lg">
                                    <Image width={500} height={300}                                        
                                        src={`/teacher/${value.img}`}
                                        alt="teacher image"
                                        priority
                                         
                                         
                                    />
                                </div>
                                <div className="grid gap-3 p-2">
                                    <div className="text-left">
                                        <h1 className="pt-2 text-xl underline">{value.name}</h1>
                                        <p className="">{value.des}</p>
                                    </div>
                                    <div>
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacher;
