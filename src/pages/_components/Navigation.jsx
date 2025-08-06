"use client"


import Image from 'next/image'
import React, { useState } from 'react'
import Img1 from '../../images/NAOBS-LOGO.png'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LucideAlignJustify, X } from 'lucide-react'

const Navigation = () => {
    const [openMenuBar, setOpenMenuBar] = useState(false);

    const handleClick =()=> {
        setOpenMenuBar(!openMenuBar);
    }
  return (
    <div className='p-5 px-6  shadow-lg sticky flex justify-between items-center top-0 z-20 bg-white lg:px-10 rounded-full max-w-sm md:max-w-4xl mx-auto mt-10'>
        {/* logo */}
        <div className='flex gap-2 items-center'>
            <Image alt='' src={Img1} className='w-[30px]'/>
        </div>
        {/* main buttons */}
        <div>
            <ul className='hidden items-center justify-center text-xs md:flex md:text-lg md:gap-10 lg:text-lg'>
                <Link href={"/"}><li className='menu_button'>Home</li></Link>
                <Link href={'/about'}><li className='menu_button flex'>About Us </li></Link>
                <Link href={'/event'}><li className='menu_button'>Events</li></Link>
                <Link href={'/toolBox'}><li className='menu_button flex'>Tool Box</li></Link>
            </ul>
            {/* hamburger menu */}
            <div>
                <LucideAlignJustify onClick={handleClick} className='cursor-pointer hover:text-primary md:hidden'/>
            </div>
        </div>
        {/* contact us button*/}
        <div className='hidden md:flex gap-2 items-center'>
            <Button className="flex p-4 gap-2 text-xs md:text-base lg:text-lg ">Contact Us</Button>
        </div>
        {/* side menu bar */}
        <div className={`${openMenuBar ? "translate-x-0 flex": "translate-x-full "} gap-6 fixed top-0 right-0 h-full w-[350px] z-30 backdrop-blur shadow-md flex-col items-start justify-start pt-4 pl-8 transition-transform duration-500 ease-in-out md:hidden`}>
            <X onClick={handleClick} className='cursor-pointer hover:text-primary'/>
            <ul className='grid items-center md:flex gap-6 text-xs md:text-lg md:gap-10 lg:text-lg'>
                <Link href={"/"}><li className='menu_button'>Home</li></Link>
                <Link href={'/about'}><li className='menu_button flex'>About Us </li></Link>
                <Link href={'/event'}><li className='menu_button'>Events</li></Link>
                <Link href={'/toolBox'}><li className='menu_button flex'>Tool Box</li></Link>
            </ul>
            <div className='flex flex-col gap-2 items-start'>
            <Button className="flex p-4 gap-2 text-xs md:text-base lg:text-lg">Contact Us</Button>
            </div>
        </div>
    </div>
  )
}

export default Navigation