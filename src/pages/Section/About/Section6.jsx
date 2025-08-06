import Image from "next/image";
import React from "react";
import Img1 from "../../../images/NAOBSyoutube.png";
import { Youtube } from "lucide-react";

const Section6 = () => {
  return (
    <div className="w-full py-10 px-6 md:px-12 max-w-6xl mx-auto">
      <span className="flex flex-col items-center justify-center text-lg lg:text-4xl font-bold pl-5">
        Yes, we're on YouTube! so click to <span>watch our videos</span>
      </span>
      {/* youtube link */}
      <div className="flex items-center justify-center mt-4">
        <a
          href="https://www.youtube.com/@naobsunilag"
          target="_blank"
          className="w-full md:w-1/2 text-white px-4 py-2 rounded-lg group"
        >
          <div className="relative w-full transition-all duration-300 rounded-lg">
            <Image alt="" src={Img1} className="w-full h-auto rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center ">
              <Youtube size={64} className=" text-red-600 drop-shadow-lg " />
            </div>
            <div className="absolute inset-0 bg-gray-600 opacity-40 rounded-lg pointer-events-none transition-opacity duration-300 group-hover:opacity-70"></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Section6;
