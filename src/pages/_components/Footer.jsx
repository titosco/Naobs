import React from 'react'
import Image from 'next/image'
import { Instagram, Twitter, Youtube, Linkedin, Facebook } from 'lucide-react'
import Logo from '../../images/NAOBS-LOGO.png'

const Section8 = () => {
  return (
    <footer className="bg-gray text-center py-8 sm:py-12 mt-10">
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
          <Image
            src={Logo}
            alt="NAOBS Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Contact Us */}
      <div className="bg-green-800 text-white px-4 sm:px-6 py-8 sm:py-10 max-w-4xl mx-auto rounded-2xl mb-8">
        <h2 className="text-lg font-semibold mb-4">Reach out to us anytime</h2>
        <button className="bg-green-500 text-white font-medium py-2 px-6 rounded-md mb-3 hover:bg-green-600 transition">
          Contact Us
        </button>
        <p className="text-sm">
          Stay connected with us beyond the inbox! Follow us on our social media platforms <br className="hidden sm:block"/>
          for updates and exclusive content.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-4 sm:space-y-0 mb-6 text-sm font-medium text-gray-900">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Events</a>
        <a href="#">Tool box</a>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {[
          { icon: Instagram, link: "https://www.instagram.com/naobsunilag/" },
          { icon: Twitter, link: "https://x.com/naobsunilag" },
          { icon: Facebook, link: "https://www.facebook.com/p/National-Association-of-Building-Students-Naobs-100077085460693/" },
          { icon: Youtube, link: "https://www.youtube.com/@NAOBSUNILAG" },
          { icon: Linkedin, link: "https://www.linkedin.com/company/naobs-unilag/posts/?feedView=all" },
        ].map(({ icon: Icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 rounded-full p-2 hover:bg-green-600 transition"
          >
            <Icon className="text-green-900 h-4 w-4" />
          </a>
        ))}
      </div>

      {/* Naobs contact information */}
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto text-sm text-gray-700 px-4 mb-2 space-y-2 sm:space-y-0">
        <p>
          Email: <a href="mailto:naobsunilagchapter@gmail.com" className="underline">naobsunilagchapter@gmail.com</a>
        </p>
        <p className="text-center sm:text-right">Department of Building, University of Lagos</p>
      </div>

      <div className="border-t border-gray-300 max-w-6xl mx-auto mb-4" />
      <p className="text-xs text-gray-500">© 2025 NAOBS UNILAG</p>
    </footer>
  )
}

export default Section8