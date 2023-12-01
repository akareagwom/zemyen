import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import Zem from '../images/zem2.png';

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    

    return (
        <nav className="w-full bg-[#3B6346] ">
            <div 
            className="
            justify-between
            px-4 mx-auto 
            lg:max-w-7xl 
            md:items-center 
            md:flex 
            md:px-8
            
            ">
                <div className="">
                    <div className="
                    flex 
                    items-center 
                    justify-between 
                    py-3 
                    md:py-5 
                    md:block">
                            {/* <div className="absolute p-0 md:top-[-6px] top-[-10px] left-1">
                                <img src={Zem} className="h-[99px] w-[130px] p-0" alt="" srcset="" />
                            </div> */}
                        <div className="md:hidden">
                            <button
                                className="p-2 absolute left-[315px] text-gray-700 rounded-md outline-none focus:border-[#4169e1] focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 bg-black w-[100%] h-[100vh] md:h-0 opacity-70  md:bg-transparent lg:bg-transparent justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden" 
                        }`}
                    >
                        <ul className="items-center absolute md:right-5 md:top-[0px]  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="md:text-white text-white w-[90px] h-[30px] rounded-[5px] cursor-pointer hover:bg-[#4169e1] hover:text-gray-300">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="md:text-white text-white w-[90px] h-[30px] rounded-[5px] cursor-pointer hover:bg-[#4169e1] hover:text-gray-300">
                                <Link to="/Gallery">Gallery</Link>
                            </li>
                            <li className="md:text-white text-white w-[90px] h-[30px] rounded-[5px] cursor-pointer hover:bg-[#4169e1] hover:text-gray-300">
                                <Link to="/About">About US</Link>
                            </li>
                            <li className="md:text-white text-white w-[90px] h-[30px] rounded-[5px] cursor-pointer hover:bg-[#4169e1] hover:text-gray-300">
                                <Link to="/Contact">Contact US</Link>
                            </li>
                            <button class="transition bg-slate-500 delay-700 duration-300 ease-in-out ...">
                                Button C
                                <span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
                                </button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}