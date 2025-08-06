'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

import Img1 from '../../../images/carousel1.png'
import Img2 from '../../../images/carousel2.png'
import Img3 from '../../../images/carousel3.png'
import Img4 from '../../../images/carousel4.png'
import Img5 from '../../../images/carousel5.png'
import Img6 from '../../../images/carousel6.png'
import Img7 from '../../../images/carousel7.png'

const Section3 = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7]
  const swiperRef = useRef(null)

  return (
    <section className="bg-black text-white py-12 px-4 rounded-t-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Look back on NAOBS moments
          </h2>
          <p className="text-sm mt-2">
            Pics or it didn't happen? Relax. We never forget to snap.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={70}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out hover:scale-115 hover:shadow-2xl ">
                <img
                  src={img.src}
                  alt={`Moment ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-6 mt-6">
          <div className="flex justify-center gap-6 mt-6">
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="text-white text-3xl hover:text-green-300 transition"
            >
                &#xab;
            </button>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="text-white text-3xl hover:text-green-300 transition"
            >
                &#xbb;
            </button>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Section3
