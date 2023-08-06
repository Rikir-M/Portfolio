import React, { useEffect, useState } from "react";
import contact from "../assets/images/contact.png";
import db from "../assets/images/dashboard.png";
import interior from "../assets/images/interior.png";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({
  imgSrc,
  title,
  description,
  link,
  animationClass,
  type,
}) => {
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
    <div
      ref={ref}
      className={isVisible ? `cssanimation ${animationClass}` : ""}
    >
      <div className="grid grid-cols-1  md:grid-cols-2 gap-0 md:gap-10 mb-5 lg:mb-20 pb-12 lg:pb-3">
        <div className="project-card col-span-1 mb-8 md:mb-0 md:my-auto transition-all duration-500 box">
          <div className="relative overflow-x-hidden pocard">
            <a
              rel="noreferrer"
              href={link}
              target="_blank"
              className="absolute  top-5 translate-x-[-50px] card"
            >
              <div className=" flex justify-center items-center  p-[8px] btn text-secondary bg-primary">
                <FiArrowRight className="text-[24px]" />
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href={link}>
              <img
                src={imgSrc}
                className="lg:p-3 p-0 border-2 border-secondary"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="project-details col-span-1 w-[100%] md:w-[80%] my-auto">
          <button className="project-type py-2 px-5 rounded-full mb-5 bg-secondary uppercase text-sm md:text-base">
            {type}
          </button>
          <h4 className="project-title text-xl md:text-3xl font-semibold mb-6 text-primary">
            {title}
          </h4>
          <p className="project-description text-textColor mb-6 text-base lg:text-lg">
            {description}
          </p>
          <a
            rel="noreferrer"
            href={link}
            target="_blank"
            className="uppercase font-medium text-sm  py-[10px] px-[20px] tracking-[2px] btn text-secondary bg-primary"
          >
            view project
          </a>
        </div>
      </div>
    </div>
  );
};


const ProjectCards = () => {
  return (
    <div className="  py-[100px]">
      <h1 className="text-primary uppercase mb-[60px] text-[35px] md:text-[40px] lg:text-[50px] font-semibold text-center">
        projects I worked on
      </h1>
      <div className="container mx-auto">
        <ProjectCard
          imgSrc={contact}
          type="Web Application"
          title="Contact App"
          description="Our feature-rich app, built with React.js, HTML, CSS, and Tailwind CSS, lets you effortlessly create and organize contacts. Enjoy a seamless user experience on all devices."
          link="https://create-contact.netlify.app/"
          animationClass="bounceInRight"
        />

        <ProjectCard
          imgSrc={interior}
          type="Web Design"
          title="Bauen-Interior"
          description="With a perfect blend of HTML, CSS, JavaScript, Tailwind CSS, and React, our web page showcases captivating interior design projects. Experience responsive and visually stunning websites crafted with expertise and passion."
          link="https://bauen-interior.netlify.app/"
          animationClass="bounceInLeft reverse"
        />

        <ProjectCard
          imgSrc={db}
          type="Web Design"
          title="Bauen-Interior Dashboard"
          description="This Admin Dashboard is the powerful control center for our interior web page, putting you in charge of effortlessly managing your interior design projects and creating captivating blogs."
          link="https://bauen-architecture-dashboard.netlify.app/"
          animationClass="bounceInRight"
        />
      </div>
    </div>
  );
};

export default ProjectCards;
