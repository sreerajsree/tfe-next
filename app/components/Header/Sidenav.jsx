import React from 'react'
import { GrClose, GrLogin, GrUserAdd } from "react-icons/gr";
import Image from 'next/image';

export const Sidenav = () => {
  return (
    <nav className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-96 h-full bg-base-200 text-base-content">
        <div className='absolute right-5 top-4 cursor-pointer hover:bg-slate-200 rounded-lg p-2'><GrClose className='w-8 h-8' /></div>
        <Image
          src="https://assets.thefashionenthusiast.uk/frontend/logo/logo.png"
          alt="The Fashion Enthusiast Logo"
          width={130}
          height={100}
          priority
          className="object-contain"
        />
        <div className='inline-flex items-center justify-between text-[14px] py-5 uppercase font-bold'>
          <a className='inline-flex items-center tracking-wide hover:text-primary'><GrLogin className='mr-2 text-blue-300'/>Login</a>
          <a className='inline-flex items-center tracking-wide hover:text-primary'><GrUserAdd className='mr-2'/>Register</a>
        </div>
        <li><a className='px-0'>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>

      </ul>
    </nav>
  )
}
