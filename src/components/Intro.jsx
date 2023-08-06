import React, { useEffect, useRef } from "react";
import "./Intro.css";
import "./Nav.css";
import Lottie from "lottie-react";
import animation from "../assets/icons/animation_lko6xn7g.json";

const Intro = () => {
  return (
    <div className="home transition-all">
      <div className="container mx-auto min-h-screen flex items-center justify-center lg:justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 mb-[50px] lg:mb-0 pt-[120px] pb-[80px] lg:pt-[180px] lg:pb-[100px] text-center lg:text-start ">
            <div className=" md:flex items-end cssanimation bounceInLeft">
              <p className="font-semibold text-textColor tracking-[2px] uppercase">
                <span className=" text-3xl cssanimation pepe">👋</span>, My name is{" "}
                <span
                  className=" text-xl "
                  style={{ textShadow: "3px 3px 1px #0f172a" }}
                >
                  Hsu Yati Myo.
                </span>
                
              </p>
              <p className=" text-textColor text-sm tracking-[2px]">
                (You can also call me <span className=" text-lg "
                  style={{ textShadow: "3px 3px 1px #0f172a" }}>Rikir.</span>)
              </p>
            </div>
            <p className="text-primary text-[50px] mb-[20px] md:mb-[20px] font-semibold bounce1 cssanimation bounceInLeft">
              A Front-end Developer
            </p>
            <p className="text-textColor mb-[8px] text-[20px] bounce2 cssanimation bounceInLeft">
              based in Yangon, Myanmar.
            </p>
            <button className="uppercase mt-[10px] py-[10px] px-[20px] tracking-[2px] btn text-white bg-[#AA7EEE] bounce3 cssanimation bounceInLeft">
              Let&apos;s Start
            </button>
          </div>
          <div className="col-span-1 cssanimation bounceInRight">
            <Lottie className="" animationData={animation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
