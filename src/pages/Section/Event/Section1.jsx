import React from 'react'
import Img1 from '../../../images/BricksandChills.png'
import Image from 'next/image'
import { Calendar1, Clock3 } from 'lucide-react'

const Section1 = () => {
  return (
    <div className='grid items-center w-full max-w-6xl mx-auto font-header py-14 lg:py-28'>
         <h1 className='font-bold text-lg lg:text-4xl text-center text-chart-1 mb-4'>NAOBS <span className='text-primary'>EVENTS</span></h1>
        <h4 className=' text-xs sm:text-sm text-center text-primary mb-2'>Builing Excellence Through Education, Networking & Professional Development</h4>
        <span className='text-lg lg:text-4xl text-center text-primary mb-2 font-bold'>Spotlight Event</span>
        <div className='grid justify-center bg-chart-5 overflow-hidden shadow-sm mb-4 mx-6 md:mx-12 lg:mx-22 rounded-md h-full relative pt-6'>
           <Image alt='' src={Img1} className=' object-cover'/>
           <div className='m-4 items-center justify-center flex flex-row gap-10'>
            <span className='flex text-xs sm:text-sm text-center text-primary mb-2 font-semibold gap-2'><Calendar1 className='text-primary'/>To Be Announced</span>
            <span className='flex text-xs sm:text-sm text-center text-primary mb-2 font-semibold gap-2'><Clock3 className='text-primary'/>To be Announced</span>
           </div>
        </div>
    </div>
  )
}

export default Section1