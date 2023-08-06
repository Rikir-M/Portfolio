import React from "react";

const SkillBanner = () => {
  return (
    <div className="py-10 bg-[#ab7eee92]">
      <div className="container mx-auto flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between">
        <h1 className="text-[25px] md:text-[30px] lg:text-[35px] font-semibold text-white">
          Intrested working with me?
        </h1>
        <a href="#contact" className="uppercase mt-[10px] py-[10px] px-[20px] text-white tracking-[2px] btn font-medium bg-primary">
          contact now
        </a>
      </div>
    </div>
  );
};

export default SkillBanner;
