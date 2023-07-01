import React from "react";
import { BiSolidUser, BiSearch, BiMicrophone } from "react-icons/bi";
import Image from 'next/image'

export const Header = () => {
    return (
        <header className="w-full border-b border-b-[#eee] p-[5px]">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="cursor-pointer toggle-btn flex items-center mr-[15px]">
                            <span className="one"></span>
                            <span className="two"></span>
                            <span className="three"></span>
                        </div>
                        <a href="">
                            <Image
                                src="https://assets.thefashionenthusiast.uk/frontend/logo/logo.png"
                                alt="The Fashion Enthusiast Logo"
                                width={150}
                                height={100}
                                priority
                                className="object-contain"
                            />
                        </a>
                    </div>
                    <div className="inline-block">
                        <ul className="flex">
                            <li className="inline-block mr-[1.5vw] link">
                                <a className="inline-block uppercase font-bold text-[12px] tracking-wide" href="">fashion</a>
                            </li>
                            <li className="inline-block mr-[1.5vw] link">
                                <a className="inline-block uppercase font-bold text-[12px] tracking-wide" href="">beauty</a>
                            </li>
                            <li className="inline-block mr-[1.5vw] link">
                                <a className="inline-block uppercase font-bold text-[12px] tracking-wide" href="">fashion shows</a>
                            </li>
                            <li className="inline-block mr-[1.5vw] link">
                                <a className="inline-block uppercase font-bold text-[12px] tracking-wide" href="">models</a>
                            </li>
                            <li className="inline-block mr-[1.5vw] link">
                                <a className="inline-block uppercase font-bold text-[12px] tracking-wide" href="">shopping</a>
                            </li>
                        </ul>
                    </div>
                    <div className="inline-flex items-center">
                        <div className="cursor-pointer"><BiSolidUser className="w-7 h-7" /></div>
                        <div className="mx-[10px] cursor-pointer"><BiSearch className="w-7 h-7" /></div>
                        <div className="cursor-pointer"><BiMicrophone className="w-7 h-7" /></div>
                    </div>
                </div>
            </div>
        </header>
    );
};
