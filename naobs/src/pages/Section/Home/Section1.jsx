import React from 'react'
import Img1 from '../../../images/Main-1.png'
import Image from 'next/image'

const Section1 = () => {
  return (
    <div className='flex flex-col p-8 px-3 max-w-6xl mx-auto font-header md:p-14 md:mx-16 lg:mx-8 lg:py-28 lg:pt-16 lg:pb-10'>
        <h4 className='px-8 text-xs sm:text-sm text-center text-primary'>Welcome to</h4>
        <h1 className='font-bold text-lg lg:text-4xl text-center text-primary'>NAOBS UNILAG</h1>
        <div className='py-3 px-10 md:px-2 lg:px-24 flex self-center rounded-full'>
           <Image alt='' src={Img1}/>
        </div>
    </div>
  )
}

export default Section1