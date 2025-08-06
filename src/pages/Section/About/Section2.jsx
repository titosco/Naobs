import { Button } from '@/components/ui/button'
import { Activity, Link2, NotebookPen, QrCode } from 'lucide-react'
import React from 'react'

const Section2 = () => {
  return (
    <div className='p-5 px-10 flex flex-col md:flex-row justify-center gap-4 md:gap-20 lg:gap-30 items-center top-0 w-full lg:px-30 bg-white'>
        {/* other text */}
        <div className='flex flex-col'>
            <ul className='flex flex-col text-xs relative  md:pr-2 gap-6 lg:gap-10 lg:text-lg'>
                <li className='whitespace-nowrap font-semibold border-l-8 border-chart-1 shadow-md pl-4 '>Tutorials and Academic clincs</li>
                <li className='whitespace-nowrap font-semibold border-l-8 border-chart-1 shadow-md pl-4'>Industry Seminar and Technical Talks</li>
                <li className='whitespace-nowrap font-semibold border-l-8 border-chart-1 shadow-md pl-4'>Competition Leadership sessions</li>
                <li className='whitespace-nowrap font-semibold border-l-8 border-chart-1 shadow-md pl-4'>Site Visits and Field Trips</li>
                <li className='whitespace-nowrap font-semibold border-l-8 border-chart-1 shadow-md pl-4'>Entertainment for the Students</li>
            </ul>
        </div>
        {/* 1st text */}
        <div className='flex flex-col gap-2 p-4 md:p-2 justify-end'>
            <span className='font-bold text-lg lg:text-4xl'>What we do!</span>
            <span className='font-normal text-xs sm:text-sm'>
                <span className='font-bold'>At NAOBS UNILAG,</span> we go beyond the books. While academic excellence is at our core, we also believe student life should be fun,
                 engaging, and unforgettable. That's why we throw signature events like HOD Games, Builders Connect, Debates, Bricks & Chills and so many others
                  - all designed to bring Building students together in exciting, impactful ways.
            </span>
            <div className='flex flex-col gap-2 items-start'>
                <Button className="flex p-4 gap-2 text-xs md:text-base lg:text-lg">Contact Us</Button>
            </div>
        </div>
        {/* other texts */}
    </div>
  )
}

export default Section2