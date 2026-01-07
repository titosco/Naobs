import React from "react";
import Img1 from "../../../images/kehinde.jpeg";
import Img2 from "../../../images/ugonma.jpeg";
import Img3 from "../../../images/jumoke.jpeg";
import Img4 from "../../../images/peace.jpeg";
import Img5 from "../../../images/olapade.jpeg";
import Img6 from "../../../images/adedeji.jpeg";
import Img7 from "../../../images/amade.jpeg";
import Img8 from "../../../images/kachi.jpeg";
import Img9 from "../../../images/daramora.jpeg";
import Img10 from "../../../images/joy.jpeg";
import Image from "next/image";

const Section4 = () => {
  return (
    <div className="p-5 px-3 grid md:flex-row justify-center gap-6 md:gap-10 items-center top-0 w-full lg:px-26">
      {/* decription for exco */}
      <div className="flex flex-col gap-2 justify-center items-center p-8 px-3 md:p-20 lg:p-20 md:mx-16 lg:mx-8 lg:py-28 lg:pt-20 lg:pb-10">
        <span className="text-center font-bold text-lg lg:text-4xl pb-2 md:pb-8">
          Meet Our Executives
        </span>
        <span className="text-center font-normal text-xs sm:text-sm ">
          {" "}
          Get to know the Executives members of our organization
        </span>
      </div>
      {/* cards */}
      <div className="mt-4 grid relative md:grid-cols-3 md:gap-20 lg:grid-cols-4 lg:gap-6">
        {/* card for 10 listings */}
        {/* card1 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img1} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">KADIRI KEHINDE</span>
                <span className="card-desc">PRESIDENT</span>
              </div>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img2} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">AKANWA UGONMA</span>
                <span className="card-desc">VICE PRESIDENT</span>
              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img3} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">AKANMU OLAJUMOKE</span>
                <span className="card-desc">GENERAL SECRETARY</span>
              </div>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img4} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">AKINPELU PEACE</span>
                <span className="card-desc">ASSIST. GENERAL SECRETARY</span>
              </div>
            </div>
          </div>
        </div>
        {/* card 5 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img5} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">OLAPADE BURHANAT</span>
                <span className="card-desc">FINANCIAL SECRETARY</span>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 6 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img6} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">ADEDEJI MA’ARUFAT</span>
                <span className="card-desc">WELFARE SECRETARY</span>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 7 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img7} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">AMADI CHUKWUEBUKA</span>
                <span className="card-desc">SPORTS SECRETARY</span>
              </div>
            </div>
          </div>
        </div>
        {/* card 8 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img8} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">UKPABI ONYEDIKACHI</span>
                <span className="card-desc">SOCIAL SECRETARY</span>
              </div>
            </div>
          </div>
        </div>
        {/* card 9 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img9} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">DARAMOLA OLUWADITEMI</span>
                <span className="card-desc">TREASURER</span>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 10 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img10} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">OLUWOLE JOY</span>
                <span className="card-desc">PUBLIC RELATION OFFICER</span>
              </div>
            </div>
          </div>
        </div>
        {/* card 10 */}
      </div>
    </div>
  );
};
// this thing must work sha

export default Section4;
