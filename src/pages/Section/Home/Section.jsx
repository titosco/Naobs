import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

const Section = () => {
  return (
    <main classname='mt-4 sm:mt-8 pt-18 sm:pt-8 w-full items-center justify-center flex flex-col bg-stone-100'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
    </main>
  )
}

export default Section