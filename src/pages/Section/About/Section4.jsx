import Image from 'next/image'
import React from 'react'
import Img1 from '../../../images/SOOFT.png'
import Img2 from '../../../images/GreenHaven.png'
import Img3 from '../../../images/EquipmentShare.png'
import Img4 from '../../../images/Duale.png'
import Img5 from '../../../images/Cocacola.png'
import Img6 from '../../../images/BlankLabel.png'
import Img7 from '../../../images/toppng.png'
import Img8 from '../../../images/IyaMoria.jpeg'
import Img9 from '../../../images/zuccoW.png'

const Section4 = () => {
  return (
    <main className='bg-white grid py-28 rounded-lg px-6 md:px-4 lg:px-22 max-w-6xl mx-auto w-full'>
        {/* main title */}
        <div>
            <span className='flex items-center justify-center text-lg lg:text-4xl font-bold'>Our Sponsors</span>
        </div>
        {/* sub title */}
        <div>
            <ul className='grid grid-cols-4 md:grid-cols-6 gap-4 mt-4 items-center justify-center'>
                <li className='flex items-center justify-center w-1/2'><Image alt='' src={Img1} /></li>
                <li className='flex items-center justify-center w-1/2'><Image alt='' src={Img2}/></li>
                <li className='flex items-center justify-center w-2/3'><Image alt='' src={Img3}/></li>
                <li className='flex items-center justify-center w-1/2'><Image alt='' src={Img4}/></li>
                <li className='flex items-center justify-center w-1/2'><Image alt='' src={Img5}/></li>
                <li className='flex items-center justify-center w-1/2'><Image alt='' src={Img6}/></li>
                <li className='flex items-center justify-center w-1/2'><Image alt='' src={Img7}/></li>
                <li className='flex items-center justify-center w-1/2'><Image alt='' src={Img8}/></li>
                <li className='flex items-center justify-center w-1/4'><Image alt='' src={Img9}/></li>
            </ul>
        </div>
    </main>
  )
}

export default Section4