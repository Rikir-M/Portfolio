import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="py-4 bg-slate-900 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className=" flex gap-5 items-center mb-2 md:mb-0 ">
                <FaFacebookF className="text-white hover:text-primary transition-all duration-200 text-base"/>
                <FaTwitter className="text-white hover:text-primary transition-all duration-200"/>
                <FaInstagram className="text-white hover:text-primary transition-all duration-200"/>
                <FaLinkedinIn className="text-white hover:text-primary transition-all duration-200"/>
                <FaPinterest className="text-white hover:text-primary transition-all duration-200"/>
            </div>
            <p className="text-white text-lg text-center md:text-start">© 2023 copyright all right reserved by pxdraft</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
