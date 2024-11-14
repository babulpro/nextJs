 "use client"
import React, { useState,useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
 

const MainNavbar = () => {
    let router = useRouter()

    const [Data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await fetch("/api/getData/navbar",{cache:"force-cache"});

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setData(data.data); // Assuming the API sends `{ status: "ok", data: [...] }`
            } catch (err) {
                console.error("Error fetching hero data:", err);
                setError(err.message);
            }
        };

        fetchHeroData();
    }, []);

    
   
    const logOut=async()=>{
        const config = {method:'get'};
        let response  = await fetch("/api/login",config,{cache:"force-cache"})
        let json = await response.json()
       
         
        if(json['status'] =="ok"){
            
            router.replace("/")
        }
    }
    const logIn=async()=>{    
            
            router.replace("/login")
        
    }

    return (
        <div>
            <div className="navbar bg-base-100 fixed top-0 z-50">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                               {Data.map((value, index) => {
                                return (
                                    <li key={value._id}>
                                        <Link key={value._id} href={value.url}>{value.name}</Link>
                                    </li>
                                );
                            })}

                        </ul>
                        </div>
                        
                        
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        {Data.map((value, index) => {
                                return (
                                    <li key={value._id}>
                                        <Link key={value._id} href={value.url}>{value.name}</Link>
                                    </li>
                                );
                            })
                                        }
                         
                        </ul>
                    </div>
                    
             
                     <div className="navbar-end flex-none gap-2">
                            <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                            </div>
                            <div className="dropdown dropdown-end">
                            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <Image
                                        src="/file.jpg"
                                        alt="Logo Image"
                                        width={300}
                                        height={200}         
                                               
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                <Link href="/dashboard/profile" className="justify-between">
                                    Profile
                                     
                                </Link>
                                </li>
                               <li> <button onClick={logIn}>LogIn</button> </li>                       
                               <li><button onClick={logOut}>LogOut</button> </li>
                                <li><a>Settings</a></li>
                            </ul>
                            </div>
                     </div>
            </div>
        </div>
    );
};

export default MainNavbar;