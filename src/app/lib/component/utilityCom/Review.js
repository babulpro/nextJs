import React from 'react';
import Link from 'next/link';

const reviewData=[
    {
        name:"Amir Hamid",
        des:"This program is ideal for kids, blending fun with learning through creative activities. It’s safe, engaging, and builds social skills, making summer both enjoyable and educational.",
        date:"01 Nov 2024"
        
    },
    {
        name:"Nithom piykasa",
        des:"This course is perfect for building a strong social media strategy. It covers everything you need to grow brand presence and engage audiences effectively.",
        date:"30 Oct 2024"
     
    },
    {
        name:"Adim Albekso",
        des:"Highly practical and insightful, this course provides the leadership and management skills needed to thrive in today's competitive business landscape.",
        date:"22 Oct 2024"
         
    },
    {
        name:"Kenedy Nirona",
        des:"An excellent program for anyone looking to strengthen coding skills, from basics to advanced topics, with hands-on projects for real-world application.",
        date:"15 Oct 2024"
         
    },
    {
        name:"Askame Tokiex",
        des:"Flexible, interactive online learning tailored to fit your schedule, covering diverse topics with expert guidance and engaging content.",
        date:"12 Oct 2024"
         
    },
    {
        name:"Lorel Mytofiya",
        des:"Great for improving spoken English skills! The course focuses on fluency, pronunciation, and building confidence, ideal for both personal and professional use.",
        date:"10 Oct 2024"
         
    },

]


const Review = () => {
    return (
        <div className="mt-10 ">
                <div className="container m-auto bg-slate-800 py-10 ">
                    
                
                        <div className='w-4/5 m-auto'>

                        <div className="w-4/5 m-auto bg-slate-800 ">
                            <div className="pt-6 text-center text-slate-300 capitalize pb-6">
                                <h1 className="font-serif text-2xl underline font-bold">student reviews</h1>
                                <p>from around the world</p>
                            </div>
                            
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                            {
                                    reviewData.length>0 &&
                                    reviewData.map((value,index)=>{
                                        return(
                                            <div key={index} className="w-full text-center mt-11 p-4 shadow-2xl ">
                                            {/* <img className="p-2 m-0 h-[370px]  w-full rounded-lg" src={value.img} alt=""/> */}
                                            <div className="text-left ">
                                            <h1 className="pt-2 underline">{index+1}.{value.name}</h1>
                                            <p  className='text-sm'>{value.des}</p>
                                            <p className="text-xs ">Date:{value.date}</p>
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

export default Review;