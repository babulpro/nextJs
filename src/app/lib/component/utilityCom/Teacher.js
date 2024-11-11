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
        <div className="mt-10">
            <div className="container m-auto bg-slate-800">
                <div className="w-4/5 m-auto bg-slate-800 py-10">
                    <div className="pt-6 text-center text-slate-300 capitalize pb-6">
                        <h1 className="font-serif text-2xl underline font-bold">Teachers</h1>
                        <p>Meet our professional teachers</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-3">
                        {Data.length > 0 && Data.slice(0, 4).map((value, index) => (
                            <div key={index} className="w-full text-center mt-11 p-4 shadow-2xl">
                                <div>
                                    <img
                                        className="p-2 m-0 h-[300px] w-full rounded-lg"
                                        src={`./images/teacher/${value.img}`}
                                        alt=""
                                    />
                                </div>
                                <div key={3} className="grid gap-3 p-2">
                                    <div className="text-left">
                                        <h1 className="pt-2 text-xl underline">Name: {value.name}</h1>
                                        <p className="text-sm">{value.des}</p>
                                    </div>
                                    <div>
                                        <ul className="flex justify-end gap-3 py-3 transition-all">
                                            <li >
                                                <Link key={index}
                                                    href={value.facebook}
                                                    className="inline-block w-7 h-7 p-1 bg-slate-700 rounded-full hover:bg-green-300"
                                                    target="_blank"
                                                >
                                                    <img src={`./images/social/${value.fImg}`} alt="Facebook"/>
                                                </Link>
                                            </li>
                                            <li  >
                                                <Link key={index}
                                                    href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                                                    className="inline-block w-7 h-7 p-1 bg-slate-700 rounded-full hover:bg-green-300"
                                                    target="_blank"
                                                >
                                                    <img src={`./images/social/linkedin.png`} alt="LinkedIn"/>
                                                </Link>
                                            </li>
                                            <li  >
                                                <Link key={index}
                                                    href={value.twitter}
                                                    className="inline-block w-7 h-7 p-1 bg-slate-700 rounded-full hover:bg-green-300"
                                                    target="_blank"
                                                >
                                                    <Image width={500} height={300} src={`./images/social/${value.tImg}`} alt="Twitter"/>
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
