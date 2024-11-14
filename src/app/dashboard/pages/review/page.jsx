"use client"
import React, { useEffect, useState } from 'react';

const myData = async () => {
    try {
        let res = await fetch("/api/getData/review");
        let data = await res.json();
        return data.data;
    } catch (e) {
        console.log(e);
    }
};

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await myData();
            setReviews(data); // Set the fetched reviews to the state
        };

        fetchData();
    }, []);

    return (
        <div >
            <div className="container m-auto bg-slate-800 py-10">
                <div className="w-4/5 m-auto">
                    <div className="">
                        <div className="pt-6 text-center text-slate-300 capitalize pb-6">
                            <h1 className="font-serif text-2xl underline font-bold">Student Reviews</h1>
                            <p>From around the world</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-3">
                        {reviews.length > 0 ? (
                            reviews.map((value, index) => (
                                <div key={index} className="w-full text-center lg:mt-11 mt-4 lg:p-4 p-1 shadow-2xl">
                                    <div className="text-left">
                                        <h1 className="pt-2 underline">{index + 1}. {value.name}</h1>
                                        <p className=''>{value.des}</p>
                                        <p className="text-xs italic"> {value.date}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>loadding .............</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
