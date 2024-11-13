import React from 'react';
import Link from 'next/link';

const reviewData = [
    {
        name: "Amir Hamid",
        des: "This program is ideal for kids, blending fun with learning through creative activities. It’s safe, engaging, and builds social skills, making summer both enjoyable and educational.",
        date: "01 Nov 2024"
    },
    {
        name: "Nithom Piykasa",
        des: "This course is perfect for building a strong social media strategy. It covers everything you need to grow brand presence and engage audiences effectively.",
        date: "30 Oct 2024"
    },
    {
        name: "Adim Albekso",
        des: "Highly practical and insightful, this course provides the leadership and management skills needed to thrive in today's competitive business landscape.",
        date: "22 Oct 2024"
    },
    {
        name: "Kenedy Nirona",
        des: "An excellent program for anyone looking to strengthen coding skills, from basics to advanced topics, with hands-on projects for real-world application.",
        date: "15 Oct 2024"
    },
    {
        name: "Askame Tokiex",
        des: "Flexible, interactive online learning tailored to fit your schedule, covering diverse topics with expert guidance and engaging content.",
        date: "12 Oct 2024"
    },
    {
        name: "Lorel Mytofiya",
        des: "Great for improving spoken English skills! The course focuses on fluency, pronunciation, and building confidence, ideal for both personal and professional use.",
        date: "10 Oct 2024"
    },
    {
        name: "Jin Soo Kim",
        des: "The Data Science course offers clear explanations, comprehensive materials, and engaging exercises that make learning enjoyable and rewarding.",
        date: "08 Oct 2024"
    },
    {
        name: "Leona Madrigal",
        des: "The perfect course for culinary enthusiasts! Detailed guidance, creative recipes, and professional tips made it an unforgettable learning experience.",
        date: "06 Oct 2024"
    },
    {
        name: "Derek Wong",
        des: "Absolutely fantastic! This Cybersecurity course gives you practical, hands-on skills and awareness of real threats. Highly recommended.",
        date: "03 Oct 2024"
    },
    {
        name: "Sofia Petrova",
        des: "Exceptional quality and content! The Graphic Design course was detailed and creative, sparking new ideas and helping me build a strong portfolio.",
        date: "01 Oct 2024"
    },
    {
        name: "Elena Ruiz",
        des: "Wonderful program! The psychology course is eye-opening and practical, teaching effective methods to manage stress and understand behavior.",
        date: "27 Sep 2024"
    },
    {
        name: "Nathaniel Ajay",
        des: "A fantastic Business Analytics course with clear explanations and practical assignments. I feel prepared to apply these skills in my career.",
        date: "25 Sep 2024"
    },
    {
        name: "Priya Narang",
        des: "Very engaging and well-structured. The Environmental Science course gave me a new perspective on sustainability and environmental responsibility.",
        date: "20 Sep 2024"
    },
    {
        name: "Tomislav Novak",
        des: "I was highly impressed by the depth and clarity of the software engineering course. Practical projects made learning advanced concepts easy.",
        date: "15 Sep 2024"
    },
    {
        name: "Isabel Pardo",
        des: "This Digital Marketing course taught me how to create impactful campaigns and use analytics tools effectively. Great for brand-building skills!",
        date: "13 Sep 2024"
    },
    {
        name: "Muhammad Rafiq",
        des: "The Japanese Language course is well-paced and culturally enriching. I now feel confident communicating and understanding the language basics.",
        date: "10 Sep 2024"
    },
    {
        name: "Elise Moreau",
        des: "This Financial Management course is straightforward and extremely valuable, offering essential tools to manage finances and plan for the future.",
        date: "07 Sep 2024"
    },
    {
        name: "Chen Ming",
        des: "An enriching English Literature course that enhanced my writing skills and broadened my perspective on classic and modern works.",
        date: "04 Sep 2024"
    },
    {
        name: "Fatima Othman",
        des: "I’m thrilled with the Art and Design course! The projects were fun and encouraged me to explore creativity and develop new artistic skills.",
        date: "01 Sep 2024"
    },
    {
        name: "Victor Johnson",
        des: "The Cybersecurity course was a great choice. It’s comprehensive and covers the latest security techniques, perfect for anyone in IT.",
        date: "28 Aug 2024"
    }
];



const Page = () => {
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

                        <div className="grid gap-3 ">
                            {
                                    reviewData.length>0 &&
                                    reviewData.map((value,index)=>{
                                        return(
                                            <div key={index} className="w-full text-center mt-11 p-4 shadow-2xl ">
                                            {/* <img className="p-2 m-0 h-[370px]  w-full rounded-lg" src={value.img} alt=""/> */}
                                            <div className="text-left ">
                                            <h1 className="pt-2 underline">{index+1}.{value.name}</h1>
                                            <p  className='text-sm'>{value.des}</p>
                                            <p className="text-xs mt-4 ">Date:{value.date}</p>
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

export default Page;