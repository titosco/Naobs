import React, { useState } from "react";
import Image from "next/image";
import Event1Cover from "../../../images/hardhats.jpg";
import Event1Img1 from "../../../images/hhh1.jpg";
import Event1Img2 from "../../../images/hhh2.jpg";
import Event1Img3 from "../../../images/hhh3.jpg";

import Event2Cover from "../../../images/eko.png";
import Event2Img1 from "../../../images/bow1.jpg";
import Event2Img2 from "../../../images/bow2.jpg";
import Event2Img3 from "../../../images/bow3.jpg";

import Event3Cover from "../../../images/hod.png";
import Event3Img1 from "../../../images/hod1.png";
import Event3Img2 from "../../../images/hod2.png";
import Event3Img3 from "../../../images/hod3.png";

// data
const eventsData = [
  {
    id: 1,
    title: "Hard Hats & Heels",
    cover: Event1Cover,
    gallery: [Event1Img1, Event1Img2, Event1Img3],
  },
  {
    id: 2,
    title: "Builders on Wheels",
    cover: Event2Cover,
    gallery: [Event2Img1, Event2Img2, Event2Img3],
  },
  {
    id: 3,
    title: "HOD Games",
    cover: Event3Cover,
    gallery: [Event3Img1, Event3Img2, Event3Img3],
  },
];

const Section4 = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          We've grouped our events specifically for you.
        </h2>
        <p className="text-gray-400 mt-2">
          Click on each event to see the highlights.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="bg-white text-black rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedEvent(event)}
          >
            <Image
              src={event.cover}
              alt={event.title}
              className="rounded-t-xl object-cover w-full h-60"
            />
            <div className="p-4 font-semibold text-green-700 flex items-center justify-center">{event.title}</div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-green-800 rounded-xl max-w-4xl w-full relative p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close the modal */}
            <button
              className="absolute top-3 right-3 text-white text-xl font-bold"
              onClick={() => setSelectedEvent(null)}
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4">
              {selectedEvent.title} Highlights
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedEvent.gallery.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`${selectedEvent.title} ${idx + 1}`}
                  className="rounded-lg object-cover w-full h-48"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section4;
