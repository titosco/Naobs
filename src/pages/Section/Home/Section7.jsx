import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import Img3 from '../../../images/jago.png'

const Section7 = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-40 h-40 md:w-64 md:h-64 rounded-xl overflow-hidden">
          <Image
            src={Img3}
            alt="Ayomikun Jago"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Testimonial content */}
        <div className="text-center md:text-left max-w-xl">
          {/* Stars */}
          <div className="flex justify-center md:justify-start mb-3">
            {Array(5).fill().map((_, i) => (
              <Star key={i} size={10} className="text-black fill-black" />
            ))}
          </div>

          {/* Quote from Jago */}
          <p className="text-lg font-semibold mb-3">
            "Being a part of NAOBS has transformed my academic journey, providing invaluable support and networking opportunities."
          </p>

          {/* Jago details */}
          <div>
            <p className="font-semibold">Ayomikun Jago</p>
            <p className="text-sm text-gray-700">Alumni, First Class Graduate</p>
            <p className="text-sm text-gray-700">
              Faculty of Environmental Sciences Students Association President (2023/2024)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section7