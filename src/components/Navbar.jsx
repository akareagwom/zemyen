import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import Zem from '../images/zem2.png';

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    

    return (
        <nav className="w-full ">
            <div 
            className="
            justify-between
            px-4 mx-auto 
            lg:max-w-7xl 
            md:items-center 
            md:flex 
            md:px-8">
                <div className="mt-[-60px]">
                    <div className="
                    flex 
                    items-center 
                    justify-between 
                    py-3 
                    md:py-5 
                    md:block">
                            <div className="absolute top-[24px] left-1">
                                <img src={Zem} className="h-[100px] w-[120px]" alt="" srcset="" />
                            </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-orange-400 focus:border"
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
                        className={`flex-1 bg-black opacity-70 md:bg-transparent lg:bg-transparent justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-[#000] w-[90px] h-[30px] rounded-[5px] cursor-pointer hover:bg-[#4169e1] hover:text-gray-300">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-[#000] w-[90px] h-[30px] rounded-[5px] cursor-pointer hover:bg-[#4169e1] hover:text-gray-300">
                                <Link to="/Gallery">Gallery</Link>
                            </li>
                            <li className="text-[#000] w-[90px] h-[30px] rounded-[5px] cursor-pointer hover:bg-[#4169e1] hover:text-gray-300">
                                <Link to="/About">About US</Link>
                            </li>
                            <li className="text-[#000] w-[90px] h-[30px] rounded-[5px] cursor-pointer hover:bg-[#4169e1] hover:text-gray-300">
                                <Link to="/Contact">Contact US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}