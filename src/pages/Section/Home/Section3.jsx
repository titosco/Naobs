import { Binoculars, Goal, Handshake } from 'lucide-react'
import React from 'react'

const Section3 = () => {
  return (
   <div className='p-20 px-3 grid md:flex-row justify-center gap-6 md:gap-10 items-center top-0 w-full lg:px-26 bg-black'>
        {/*  small cards */}
        <div className='mt-4  p-8 grid gap-10 relative md:grid-cols-3 items-center justify-center'>
            {/* small card 1 */}
            <div className='bg-chart-4 text-white overflow-hidden relative text-start p-4 rounded-lg items-center'>
                <div className=' flex gap-3 flex-col pt-4'>
                    <span className='font-bold text-center text-lg lg:text-4xl pb-2 flex justify-between'>Mission<Goal className='text-white justify-end' /></span>
                    <span className='font-normal text-center text-xs sm:text-sm'>To empower Building students of the University of Lagos through academic support, professional exposure,
                         leadership development, and collaborative opportunities that promote excellence in the construction and built environment industry</span>
                </div>
            </div>
            {/* small card 2 */}
            <div className='bg-chart-4 text-white overflow-hidden relative text-start p-4 rounded-lg items-center'>
                <div className=' flex gap-3 flex-col pt-4'>
                    <span className='font-bold text-center text-lg lg:text-4xl pb-2 flex justify-between'>Vision<Binoculars className='text-white justify-end' /></span>
                    <span className='font-bold text-center text-xs sm:text-sm'>To be a leading student association recognized for nurturing future industry leaders, promoting innovation,
                         and bridging the gap between academic knowledge and real-world practice in the Nigerian and global construction sectors.</span>
                </div>
            </div>
            {/* small card 3 */}
            <div className='bg-chart-4 text-white overflow-hidden relative text-start p-4 rounded-lg items-center'>
                <div className=' flex gap-3 flex-col pt-4'>
                    <span className='font-bold text-center text-lg lg:text-4xl pb-2 flex justify-between'>Values <Handshake className='text-white justify-end' /></span>
                    <span className='font-bold text-center text-xs sm:text-sm'>We are committed to upholding high standards in academics and leadership.
                        Through collaboration and teamwork, we create a supportive community, we are commited to the growth of our members and development of built environment.</span>
                </div>
                {/* something else */}
                {/*  */}
            </div>
        </div>
    </div>
  )
}

export default Section3