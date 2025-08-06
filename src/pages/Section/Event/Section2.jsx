import React from 'react'
import Image from 'next/image'
import { Calendar, Clock, MapPin } from 'lucide-react'
import Img1 from '../../../images/BricksandChills.png'

const Section2 = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Upcoming Events</h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          From academic programs to social events that bring the whole department out, we're all about keeping you plugged in. Whether it's learning, connecting, or just catching a break, there's always something around the corner.👀
        </p>
        <p className="text-gray-700 mt-1 max-w-2xl mx-auto px-4">
          Stay in the loop so you don't miss key dates, venues, or time updates and yes, we drop it first on our socials. Turn on post notifications. You'll thank us later.
        </p>
      </div>

      <div className="bg-green-100 rounded-2xl flex flex-col md:flex-row overflow-hidden relative mt-10 animate-pulse">
        <div className="md:w-[50%] p-3 flex-shrink-0">
          <Image
            src={Img1}
            alt="Bricks Rhythm & Chills"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex-1 p-6">
          <h3 className="text-xl font-bold mb-4">BRICKS RHYTHM & CHILLS</h3>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <Calendar size={18} className="text-green-600" />
            <Clock size={18} className="text-green-600" />
            <MapPin size={18} className="text-green-600" />
            <span>To be announced soon</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Exams? Done. Deadlines? Gone. Now it's time to breathe, dance, and just be. Bricks, Rhythm & Chills is back, and if you know, you know. This isn't just another event, it's the Building Department link-up. The kind that brings everyone out — faces you haven't seen all semester, songs that hit different, and vibes that make you forget all the stress. It's our rhythm. Our vibe. Don't dull.
          </p>
        </div>

        {/* Trying to add a design to the side*/}
        <div className="absolute top-0 right-0 w-6 h-6 bg-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  )
}

export default Section2
