import React from 'react'
import { ArrowRight } from 'lucide-react'

const Section6 = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">Events and Activities</h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Stay updated on the latest events, workshops, and activities organized by the
          department for students and the community.
        </p>
      </div>

      <div className="bg-gray-900 text-white rounded-3xl grid md:grid-cols-3 overflow-hidden">
        
        {/* Card 1 */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Builder's Connect</h3>
            <p className="text-sm text-gray-300">
              A social and recreational program designed to foster connection, relaxation, 
              and bonding among Building students through fun indoor games and activities.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 flex items-center gap-1 text-green-400 text-sm font-medium hover:underline"
          >
            Learn more <ArrowRight size={16} />
          </a>
        </div>

        {/* Card 2 */}
        <div className="p-6 flex flex-col justify-between relative">
          {/* Left divider */}
          <div className="hidden md:block absolute left-0 top-6 bottom-6 w-px bg-gray-600"></div>
          {/* Right divider */}
          <div className="hidden md:block absolute right-0 top-6 bottom-6 w-px bg-gray-600"></div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Builders on Wheels</h3>
            <p className="text-sm text-gray-300">
              An educational tour program where students visit construction sites and 
              industries to gain hands-on experience and practical insight into real-world 
              building processes.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 flex items-center gap-1 text-green-400 text-sm font-medium hover:underline"
          >
            Learn more <ArrowRight size={16} />
          </a>
        </div>

        {/* Card 3 */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Gown and Industry</h3>
            <p className="text-sm text-gray-300">
              NAOBS Unilag's annual workshop seminar. It features expert facilitators from 
              various sectors of construction who share insights, trends, and career 
              guidance with Building students.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 flex items-center gap-1 text-green-400 text-sm font-medium hover:underline"
          >
            Learn more <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Section6