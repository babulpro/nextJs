"use client";
import React, { useEffect, useState } from "react";

const fetchReviews = async () => {
    try {
        const res = await fetch("/api/getData/review");
        if (!res.ok) throw new Error("Failed to fetch reviews");
        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return [];
    }
};

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchReviews();
            setReviews(data || []);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="container m-auto py-20">
            <div className=" bg-slate-800 mx-auto p-6">
                <header className="text-center text-slate-300 capitalize pb-6">
                    <h1 className="font-serif text-3xl underline font-bold">Student Reviews</h1>
                    <p className="text-sm">Voices from around the world</p>
                </header>

                {loading ? (
                    <div className="text-center text-slate-200 py-6">
                        <p>Loading reviews...</p>
                    </div>
                ) : reviews.length > 0 ? (
                    <div className="grid lg:grid-cols-2 gap-6">
                        {reviews.slice(0, 4).map((review, index) => (
                            <div
                                key={index}
                                className="bg-slate-700 text-slate-300 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
                            >
                                <h2 className="font-bold text-lg mb-2 underline">
                                    {index + 1}. {review.name}
                                </h2>
                                <p className="text-sm mb-4">{review.des}</p>
                                <p className="text-xs italic text-gray-500">{review.date}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-slate-400 py-6">
                        <p>No reviews available</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Review;
