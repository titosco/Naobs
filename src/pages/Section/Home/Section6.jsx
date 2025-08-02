import React from 'react'

const insights = [
  {
    lecturer: 'Professor Dada',
    title: 'Understanding Building Regulations in Nigeria',
    description: 'Explore the essential regulations every builder should know.',
    link: '#',
  },
  {
    lecturer: 'Dr Kukoyi',
    title: 'Understanding Building Regulations in Nigeria',
    description: 'Explore the essential regulations every builder should know.',
    link: '#',
  },
  {
    lecturer: 'Dr Soyingbe',
    title: 'Understanding Building Regulations in Nigeria',
    description: 'Explore the essential regulations every builder should know.',
    link: '#',
  },
]

const Section6 = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Latest Insights for Students
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="w-full h-48 bg-gray-200 rounded-lg"></div>

            {/* lecturer */}
            <span className="inline-block bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full font-medium w-fit">
              {item.lecturer}
            </span>

            {/* Title */}
            <h3 className="font-semibold text-lg leading-snug">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600">{item.description}</p>

            {/* Read more link */}
            <a
              href={item.link}
              className="text-green-600 text-sm font-medium mt-auto hover:underline flex items-center gap-1"
            >
              Read more <span>&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section6