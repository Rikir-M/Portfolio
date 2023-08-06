import React, { useEffect, useState } from "react";
import Rikir from "../assets/images/Rikir.jpg";
import { BsGithub } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div className="container mx-auto transition-all">
      <div className="flex min-h-screen justify-between py-[45px] md:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className={`col-span-1 mx-auto mb-[25px] lg:mb-0 lg:mx-0 ${isVisible ? "cssanimation fadeInLeft" : ""}`}>
            <img className="me border-2 w-3/4 lg:p-5" src={Rikir} alt="Rikir" />
          </div>
          <div
            ref={ref}
            className={isVisible ? "cssanimation fadeInBottom" : ""}
          >
            <div className="col-span-1">
              <h1 className="font-semibold text-[26px] text-primary md:text-[40px] mb-[25px]">
                I am a Junior Front-end Developer.
              </h1>
              <p className="text-textColor text-[16px] md:text-[18px] mb-[25px]">
                Welcome to my portfolio! I am an aspiring junior front-end
                developer with a strong passion for crafting visually stunning
                and user-centric web experiences. I have 6 months of learning
                period and more than 2 months of workshop experience at MMS IT,
                where I honed my skills in HTML, CSS, JavaScript and ReactJs.
                Through my showcased projects, you wll witness my dedication
                to creating responsive and engaging websites that leave a
                lasting impact. I thrive on challenges and I am constantly
                exploring new opportunities to expand my knowledge and
                expertise. Join me on this exciting journey of growth and
                creativity as we build exceptional digital experiences together.
                Thank you for visiting!
              </p>
              <div className="cursor-pointer flex items-center gap-2">
                <BsGithub />
                <a
                  rel="noreferrer"
                  href="https://github.com/Rikir-M"
                  target="_blank"
                  className="font-semibold pb-1 hover:text-[#745EB1] text-primary  hover:underline transition-all duration-400"
                >
                  Follow me on github for more details
                </a>
              </div>
              <div className="pt-[25px]">
                <a
                  href="#contact"
                  className="uppercase font-medium mt-[10px] mr-4 py-[9px] px-[19px] md:py-[10px] md:px-[20px] tracking-[2px] btn text-secondary bg-primary"
                >
                  Contact Me
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://drive.google.com/file/d/1Xm60jaw7ZB1WlOcwbS1ikJ_1ex-NDjZI/view?usp=sharing"
                  className="uppercase font-medium mt-[10px] py-[9px] px-[19px] md:py-[10px] md:px-[20px] tracking-[2px] btn text-secondary bg-primary"
                >
                  Check My CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
