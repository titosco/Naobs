import Image from "next/image";
import React from "react";
import Img1 from "../../../images/NAOBSIFE.png";

function Section5() {
  return (
    <section className="bg-chart-2 w-full py-24 px-6 md:px-12 max-w-6xl mx-auto rounded-lg">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            We came, We saw, We Built and We Conquered in OAU
          </h2>
          <p className="text-sm md:text-base text-white leading-relaxed">
            NAOBS UNILAG made history at the OAU Inter-University Building
            Competition not just by showing up, but by showing out. With
            creativity, teamwork, and undeniable skill, our team clinched the
            top spot, proving once again that we don't just study Building, we
            lead it. This win isn't just a trophy, it's a statement: UNILAG is
            where champions are made!
          </p>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={Img1}
            alt="Students"
            className="rounded-md object-cover"
            width={500}
            height={350}
          />
        </div>
      </div>
    </section>
  );
}

export default Section5;
