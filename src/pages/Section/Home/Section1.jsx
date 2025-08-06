import React from 'react'
import Img1 from '../../../images/Main-1.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

const imageAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const Section1 = () => {
  return (
    <div className='flex flex-col items-center w-full max-w-6xl mx-auto font-header py-14 lg:py-28 justify-items-center'>
        <h4 className=' text-base  text-center text-primary mb-2'>Welcome to</h4>
        <h1 className='font-bold text-lg lg:text-6xl text-center text-primary mb-4'>NAOBS UNILAG</h1>
        <motion.div
          className='flex justify-center rounded-full'
          variants={imageAnimation}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Image alt='' src={Img1} />
        </motion.div>
    </div>
  )
}

export default Section1