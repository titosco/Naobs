import React from "react";
import Image from "next/image";
import Img1 from "../../../images/ProfDada.png";

const Section3 = () => {
  return (
    <section className="bg-[#FFF7ED] rounded-2xl py-4 px-6 md:px-4 lg:px-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 lg:gap-10">
        {/* image and title */}
        <div className="card flex flex-col items-center ">
          <div className="card-inner">
            <div className="card-face w-full">
              <Image alt="" src={Img1} className="img-front w-full h-auto justify-center object-cover max-w-xs" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">Prof. Martin Dada</span>
                <span className="card-desc">HEAD OF DEPARTMENT</span>
              </div>
            </div>
          </div>
        </div>

        {/* text content */}
        <div className=" w-full md:w-1/2 p-2 lg:p-10  rounded-lg">
          <h2 className="text-lg lg:text-4xl font-bold mb-2">Meet the HOD</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Professor Martin Dada is a leading authority in Building and
            Quantity Surveying in Nigeria. He has led major research on
            construction cost modeling, risk management, and procurement. A
            board member of the Quantity Surveyors Registration Board of Nigeria
            (QSRBN), he has also championed enforcement of the National Building
            Code and improved standards across Nigeria's construction industry.
            Through decades of teaching, leadership, and consultancy in building
            and construction projects, Professor Dada continues to shape the
            future of the building profession in Nigeria by combining academic
            excellence with practical impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
