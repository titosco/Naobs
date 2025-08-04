import React from 'react'
import Image from 'next/image'
import { Instagram, Twitter, Youtube, Linkedin, Facebook } from 'lucide-react'
import Logo from '../../images/NAOBS-LOGO.png'

const Section8 = () => {
  return (
    <footer className="bg-white text-center py-12 mt-10">
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 relative">
          <Image
            src={Logo}
            alt="NAOBS Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="bg-green-800 text-white px-6 py-10 max-w-4xl mx-auto rounded-2xl mb-8">
        <h2 className="text-lg font-semibold mb-4">Reach out to us anytime</h2>
        <button className="bg-green-500 text-white font-medium py-2 px-6 rounded-md mb-3 hover:bg-green-600 transition">
          Contact Us
        </button>
        <p className="text-sm">
          Stay connected with us beyond the inbox! Follow us on our social media platforms <br/>
          for updates and exclusive content.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-center space-x-8 mb-6 text-sm font-medium text-gray-900">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Events</a>
        <a href="#">Tool box</a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mb-6">
        <a
            href="https://www.instagram.com/naobsunilag/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 rounded-full p-2 hover:bg-green-600 transition"
        >
            <Instagram className="text-green-900 h-4 w-4" />
        </a>
        <a
            href="https://x.com/naobsunilag"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 rounded-full p-2 hover:bg-green-600 transition"
        >
            <Twitter className="text-green-900 h-4 w-4" />
        </a>
        <a
            href="https://www.facebook.com/p/National-Association-of-Building-Students-Naobs-100077085460693/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 rounded-full p-2 hover:bg-green-600 transition"
        >
            <Facebook className="text-green-900 h-4 w-4" />
        </a>
        <a
            href="https://www.youtube.com/@NAOBSUNILAG"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 rounded-full p-2 hover:bg-green-600 transition"
        >
            <Youtube className="text-green-900 h-4 w-4" />
        </a>
        <a
            href="https://www.linkedin.com/company/naobs-unilag/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 rounded-full p-2 hover:bg-green-600 transition"
        >
            <Linkedin className="text-green-900 h-4 w-4" />
        </a>
        </div>


      {/* Contact Info*/}
      <div className="flex justify-between items-center max-w-6xl mx-auto text-sm text-gray-700 px-4 mb-2">
        <p>Email: <a href="mailto:naobsunilagchapter@gmail.com">naobsunilagchapter@gmail.com</a></p>
        <p>Department of Building, University of Lagos</p>
      </div>
      <div className="border-t border-gray-300 max-w-6xl mx-auto mb-4" />
      <p className="text-xs text-gray-500">© 2025 NAOBS UNILAG</p>
    </footer>
  )
}

export default Section8
