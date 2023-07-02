import React from "react";
import { BiSolidUser, BiSearch, BiMicrophone } from "react-icons/bi";
import Image from 'next/image'
import { Sidenav } from "./Sidenav";

export const Header = () => {
    return (
        <nav className="w-full border-b border-b-[#eee] py-[5px]">
            <div className="px-[15px] md:container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="cursor-pointer toggle-btn flex items-center mr-[15px] drawer-button">
                                    <span className="one"></span>
                                    <span className="two"></span>
                                    <span className="three"></span></label>
                            </div>
                            <Sidenav />
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
                    <div className="hidden lg:inline-block">
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
                        <div className="cursor-pointer"><BiSolidUser className="w-[1.8rem] h-[1.8rem]" /></div>
                        <div className="mx-[10px] cursor-pointer"><BiSearch className="w-[1.8rem] h-[1.8rem]" /></div>
                        <div className="cursor-pointer"><BiMicrophone className="w-[1.8rem] h-[1.8rem]" /></div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
