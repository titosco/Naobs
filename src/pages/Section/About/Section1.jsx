import React from 'react'
import Image from 'next/image'
import Img1 from '../../../images/Frame207.png'

const Section1 = () => {
  return (
    <section className=" w-full rounded-2xl py-10 px-6 md:px-12 max-w-6xl mx-2 md:my-12">
      <div className="flex flex-col md:flex-row items-center">

        <div className="w-full md:w-1/2 bg-chart-4 p-10 lg:p-20  rounded-lg">
            <h2 className="text-lg lg:text-4xl font-bold text-white mb-4">
                What else is there to know?
            </h2>
            <p className="text-sm md:text-base text-white leading-relaxed">
                We are more than an assocaition, we're a movement of visionaries shaping Nigeria's built future. Whether you are here out of curiosity or purpose,
                your're standing at the egde of inovation, leadership, and lagacy.
            </p>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={Img1}
            alt="Students"
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Section1