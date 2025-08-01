import React from 'react'

const Section2 = () => {
  return (
    <div className='p-5 px-3 grid md:flex-row justify-center gap-6 md:gap-10 items-center top-0 w-full lg:px-26'>
        {/*  small cards */}
        <div className='mt-4 grid gap-10 relative md:grid-cols-3 items-center justify-center'>
            {/* small card 1 */}
            <div className='bg-chart-2 text-white overflow-hidden relative text-start p-3 border-b-5 border-chart-3 rounded-lg items-center'>
                <div className=' flex gap-3 flex-col pt-4'>
                    <span className='font-bold text-center text-lg lg:text-4xl pb-2'>300+</span>
                    <span className='font-normal text-center text-xs sm:text-sm'>Active student members</span>
                </div>
            </div>
            {/* small card 2 */}
            <div className='bg-chart-2 text-white overflow-hidden relative text-start p-4 border-b-5 border-chart-3 rounded-lg items-center'>
                <div className=' flex gap-3 flex-col pt-4'>
                    <span className='font-bold text-center text-lg lg:text-4xl pb-2'>10+</span>
                    <span className='font-normal text-center text-xs sm:text-sm'>Academic Staff</span>
                </div>
            </div>
            {/* small card 3 */}
            <div className='bg-chart-2 text-white overflow-hidden relative text-start p-4 border-b-5 border-chart-3 rounded-lg items-center'>
                <div className=' flex gap-3 flex-col pt-4'>
                    <span className='font-bold text-center text-lg lg:text-4xl pb-2'>40+</span>
                    <span className='font-normal text-center text-xs sm:text-sm'>Graduate members annually</span>
                </div>
            </div>
        </div>
        {/* who are we description  */}
         <div className='flex flex-col gap-2 justify-center items-center p-8 px-3 md:p-20 lg:p-20 md:mx-16 lg:mx-8 lg:py-28 lg:pt-20 lg:pb-10'>
            <span className='text-center font-bold text-xs sm:text-sm pb-4 md:pb-8'>Who are we?</span>
            <span className='text-center font-normal text-xs sm:text-sm '> <span className='font-bold text-primary'>NAOBS UNILAG </span>is a vibrant community dedicated to supporting <span className='font-bold text-primary'>Building Students</span> at the University of lagos.
                 We provide the resources, guidance, and connections you need to thrive- both in school and beyond. As a member, you'll gain access to valuable learning materials,
                 mentorship opportunities, and real industry networks. From hands-on events to skill-building workshops, <span className='font-bold text-primary' >NAOBS</span> creates a space where you can grow , connect with your peers
                  and prepare for a successful career in the built environment
            </span>
        </div>
    </div>
  )
}

export default Section2