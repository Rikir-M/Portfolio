import React, { useEffect, useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import "./Nav.css";

const Nav = ({ data }) => {
  const [show, setShow] = useState(false);
  const [pg, setPg] = useState(null);
  useEffect(() => {
    setPg(data);
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / windowHeight) * 100;
      setShow(percentage > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full z-10 nav">
      <div className={`transition-all ${show ? "bg-[#3F3872] link-alt nav-alt code" : ""}`}>
        <nav className=" container mx-auto ">
          <div className=" flex flex-wrap items-center justify-between mx-auto py-4">
            <a href="#" className="flex items-center">
              <BsCodeSlash className="text-[32px] logo mr-3 text-primary" />
              <h1 className="text-[32px] text-secondary">
                Riki<i className="text-primary">Dev</i>
              </h1>
            </a>
            {/* <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden  focus:outline-none "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button> */}
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                <li className="link">
                  <a
                    href="#home"
                    className={`${
                      pg === "home" || !show ? "active" : ""
                    } py-2 pl-3 pr-4 text-base tracking-[2px] uppercase font-medium  md:p-0 `}
                    aria-current="page"
                  >
                    About me
                  </a>
                </li>

                <li className="link">
                  <a
                    href="#skills"
                    className={`${
                      pg === "skills" ? "active" : ""
                    } py-2 pl-3 pr-4 text-base tracking-[2px] uppercase font-medium  md:p-0`}
                    aria-current="page"
                  >
                    skills
                  </a>
                </li>
                <li className="link">
                  <a
                    href="#portfolio"
                    className={`${
                      pg === "portfolio" ? "active" : ""
                    } py-2 pl-3 pr-4 text-base tracking-[2px] uppercase font-medium  md:p-0`}
                    aria-current="page"
                  >
                    projects
                  </a>
                </li>
                <li className="link">
                  <a
                    href="#contact"
                    className={`${
                      pg === "contact" ? "active" : ""
                    } py-2 pl-3 pr-4 text-base tracking-[2px] uppercase font-medium  md:p-0`}
                    aria-current="page"
                  >
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
