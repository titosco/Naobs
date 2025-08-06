import React from 'react'
import Image from 'next/image'
import Img2 from '../../../images/events.jpg'

const Section5 = () => {
  return (
    <section className="w-full py-20 px-8">
      <div className="flex flex-col md:flex-row items-center gap-8">

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-extrabold text-green-900 mb-4">
            Don't Miss Out <br /> On Our Next Event...
          </h2>

          <p className="text-base md:text-lg font-medium text-gray-700 leading-relaxed">
            Connect with us on social media and via email to receive instant updates on event announcements. Don't miss any opportunity to advance your building career!
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src={Img2}
            alt="Students"
            className="rounded-md object-cover"
            width={500}
            height={350}
          />
        </div>
      </div>
    </section>
  )
}

export default Section5
