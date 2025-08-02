import React from 'react'
import Image from 'next/image'
import Img2 from '../../../images/academics.png'

const Section5 = () => {
  return (
    <section className="bg-[#FFF7ED] rounded-2xl py-10 px-6 md:px-12 max-w-6xl mx-auto my-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={Img2}
            alt="Students"
            className="rounded-md object-cover"
            width={500}
            height={350}
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Academic Programs
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            The Department of Building at the University of Lagos offers a comprehensive academic program
            designed to equip students with the technical, managerial, and practical skills needed in the construction and built environment industry.
            These programs are tailored to prepare students for professional roles as builders, construction managers, and consultants, enabling
            them to contribute effectively to infrastructure development and sustainable construction practices.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section5