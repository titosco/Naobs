import React from 'react'
import Img1 from '../../../images/Main-1.png'
import Image from 'next/image'

const Section1 = () => {
  return (
    <div className='flex flex-col items-center w-full max-w-6xl mx-auto font-header py-14 lg:py-28'>
        <h4 className=' text-xs sm:text-sm text-center text-primary mb-2'>Welcome to</h4>
        <h1 className='font-bold text-lg lg:text-4xl text-center text-primary mb-4'>NAOBS UNILAG</h1>
        <div className='flex justify-center rounded-full'>
           <Image alt='' src={Img1}/>
        </div>
    </div>
  )
}

export default Section1