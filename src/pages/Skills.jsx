import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoPhp } from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import Lottie from "lottie-react";
import animation from "../assets/icons/animation_lkvmlwhc.json";

const Skills = () => {
  return (
    <>
      <section className=" md:p-[100px] data-section " id="skills">
        <h1 className="uppercase text-center mb-[60px] text-primary text-[35px] md:text-[40px] lg:text-[50px] font-semibold">
          what i can do
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
          <div className="col-span-1">
            <div className="mx-auto grid grid-cols-2 gap-2 md:gap-4">
              <div className="p-[15px] col-span-1 flex gap-2 lg:gap-5 border-secondary border-2 bg-[#f69f7a] box">
                <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                  <FaHtml5 className="text-[32px]" />
                </div>
                <h1 className="text-base lg:text-lg  font-semibold my-auto">
                  HTML
                </h1>
              </div>
              <div className="p-[15px] col-span-1 flex gap-2 lg:gap-5 border-secondary border-2 bg-[#7ea2f8] box">
                <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                  <FaCss3 className="text-[32px]" />
                </div>
                <h1 className="text-base lg:text-lg  font-semibold my-auto">
                  CSS
                </h1>
              </div>
              <div className="p-[15px] col-span-1 flex gap-2 lg:gap-5 border-secondary border-2 bg-[#f7e351] box">
                <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                  <IoLogoJavascript className="text-[32px]" />
                </div>
                <h1 className="text-base lg:text-lg  font-semibold my-auto">
                  JavaScript
                </h1>
              </div>
              <div className="p-[15px] col-span-1 flex gap-2 lg:gap-5 border-secondary border-2 bg-[#4D598F] box">
                <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                  <BiLogoPhp className="text-[32px]" />
                </div>
                <h1 className="text-base lg:text-lg  font-semibold my-auto">
                  PHP
                </h1>
              </div>
              <div className="p-[15px] col-span-1 flex gap-2 lg:gap-5 border-secondary border-2 bg-[#b377ec] box">
                <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                  <FaBootstrap className="text-[32px]" />
                </div>
                <h1 className="text-base lg:text-lg  font-semibold my-auto">
                  Bootstrap
                </h1>
              </div>{" "}
              <div className="p-[15px] col-span-1 flex gap-2 lg:gap-5 border-secondary border-2 bg-[#e898c0] box">
                <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                  <FaSass className="text-[32px]" />
                </div>
                <h1 className="text-base lg:text-lg  font-semibold my-auto">
                  SASS
                </h1>
              </div>
              <div className="p-[15px] col-span-1 flex gap-2 lg:gap-5 border-secondary border-2 bg-[#38BDF8] box">
                <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                  <BiLogoTailwindCss className="text-[32px]" />
                </div>
                <h1 className="text-base lg:text-lg  font-semibold my-auto">
                  TailwindCSS
                </h1>
              </div>
              <div className="p-[15px] col-span-1 flex gap-2 lg:gap-5 border-secondary border-2 bg-[#94def2] box">
                <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                  <FaReact className="text-[32px]" />
                </div>
                <h1 className="text-base lg:text-lg  font-semibold my-auto">
                  React JS
                </h1>
              </div>
              <div className="p-[15px] col-span-1 flex gap-2 lg:gap-5 border-secondary border-2 bg-[#bb90fb] box">
                <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                  <SiRedux className="text-[32px]" />
                </div>
                <h1 className="text-base lg:text-lg  font-semibold my-auto">
                  Redux
                </h1>
              </div>
              <div className="p-[15px] col-span-1 flex gap-2 lg:gap-5 border-secondary border-2 bg-[#F29111] box">
                <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                  <GrMysql className="text-[32px]" />
                </div>
                <h1 className="text-base lg:text-lg  font-semibold my-auto">
                  MySQL
                </h1>
              </div>
              <div className="p-[15px] col-span-1 flex gap-2 lg:gap-5 border-secondary border-2 bg-[#778da9] box">
                <div className="w-[50px] h-[50px] p-[10px] flex justify-center items-center border-secondary border-2 bg-white">
                  <BsGithub className="text-[32px]" />
                </div>
                <h1 className="text-base lg:text-lg  font-semibold my-auto">
                  GitHub
                </h1>
              </div>
            </div>
          </div>
          <div className="col-span-1 pt-[40px] md:pt-0">
            <Lottie animationData={animation} loop={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
