"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const [animating, setAnimating] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Fetch data from API
        (async () => {
            try {
                const response = await fetch("http://localhost:3000/api/Carousel", { cache: 'force-cache' });
                if (!response.ok) throw new Error("Network response was not ok");
                const res = await response.json();
                setData(res.formFields);
            } catch (e) {
                setError("Something went wrong");
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleNext = () => {
        setAnimating(true);
        setTimeout(() => {
            setIndex((prev) => (prev < data.length - 1 ? prev + 1 : 0));
            setAnimating(false);
        }, 600);
    };

    const handlePrev = () => {
        setAnimating(true);
        setTimeout(() => {
            setIndex((prev) => (prev > 0 ? prev - 1 : data.length - 1));
            setAnimating(false);
        }, 600);
    };

    const toggleShow = () => setShow((prev) => !prev);

    useEffect(() => {
        // Set an interval to automatically trigger `handleNext` every 6 seconds
        const interval = setInterval(() => {
            handleNext();
        }, 6000);

        return () => clearInterval(interval);
    }, [index]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!data || data.length === 0) return <p>No data available</p>;

    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="w-full carousel h-72 relative overflow-hidden">
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                    {/* Image */}
                    <div
                        className={`w-full relative carousel-item opacity-0 inset-0 transition-opacity duration-500 ${animating ? "opacity-0" : "opacity-100"} `}
                    >
                        <Image
                            width={500}
                            height={300}
                            className="w-full h-auto object-cover"
                            src={data[index]?.url || ''}
                            alt={data[index]?.name || ''}
                            onLoad={() => setAnimating(false)}
                        />
                    </div>

                    {/* Text on top of image */}
                    <div className="absolute inset-0 h-full flex items-center z-20">
                        <h1 className={`font-4xl p-20 text-white mt-10 text-start transition-all duration-700 ease-in-out transform ${animating ? "translate-x-10 opacity-0" : "translate-x-0 opacity-100"}`}>
                            {data[index].details.split(" ").slice(0, 20).join(" ")}...
                        </h1>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between z-20">
                        <button className="btn btn-circle hover:animate-ping" onClick={handlePrev}>
                            {"<"}
                        </button>
                        <button className="btn btn-circle hover:transition duration-700" onClick={handleNext}>
                            {">"}
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="mt-4">
                <div className="flex justify-between">
                    <button onClick={toggleShow} className="btn btn-primary">
                        {show ? "Hide" : "Short Description"}
                    </button>
                    <h1 className="mt-2 font-2xl underline">{data[index]?.name}</h1>
                    <button onClick={() => router.push("/dashboard")} className="btn btn-primary">
                        Learn Deeply
                    </button>
                </div>
                <div className="text-justify px-1 mt-2 shadow-2xl py-3">
                    {show && data[index] && (
                        <div>
                            <p>{data[index]?.details}</p>
                        </div>
                    )}
                </div>
            </div> */}
        </div>
    );
};

export default Carousel;
