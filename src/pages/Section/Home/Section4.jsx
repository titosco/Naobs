import React from "react";
import Img1 from "../../../images/Roqeeb.png";
import Img2 from "../../../images/Oyenuga.png";
import Img3 from "../../../images/Khalid.png";
import Img4 from "../../../images/Jumoke.png";
import Img5 from "../../../images/TITO.png";
import Img6 from "../../../images/Uthman.png";
import Img7 from "../../../images/Sooft.jpg";
import Img8 from "../../../images/Esther.png";
import Img9 from "../../../images/Fash.png";
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
      <div className="mt-4 grid relative md:grid-cols-2 md:gap-20 lg:grid-cols-3 lg:gap-6">
        {/* card for 9 listings */}
        {/* card1 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img1} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">AbdulRoqeeb Yaqob</span>
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
                <span className="card-title">Khalid Oyenuga</span>
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
                <span className="card-title">Khalid Duale</span>
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
                <span className="card-title">Olajumoke Akanmu</span>
                <span className="card-desc">FINANCIAL SECRETARY</span>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 5 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img5} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">Tella Titobiloluwa</span>
                <span className="card-desc">WELFARE SECRETARY</span>
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
                <span className="card-title">Uthman Olayinka</span>
                <span className="card-desc">SPORTS SECRETARY</span>
              </div>
            </div>
          </div>
        </div>
        {/* card 7 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img7} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">Dolapo Fasida</span>
                <span className="card-desc">SOCIAL SECRETARY</span>
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
                <span className="card-title">Esther Shogunle</span>
                <span className="card-desc">TREASURER</span>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 9 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-face">
              <Image alt="" src={Img9} className="img-front" />
              <div className="m-4 items-center justify-center flex flex-col">
                <span className="card-title">Fashina Juwon</span>
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