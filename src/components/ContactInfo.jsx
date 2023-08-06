import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Lottie from "lottie-react";
import animation from "../assets/icons/animation_lkf8ztyt.json";

const ContactInfo = () => {
  const phoneNumber = '+959795592302'
  const emailAddress = 'hsuyatimyo11@gmail.com'
  return (
    <div className="mx-auto  w-full md:w-1/2 ">
      <div className="">
        <Lottie animationData={animation} className="h-[500px] " loop={true} />
      </div>
      <div className="">
        <div className=" pb-[35px] flex gap-5 ">
          <div className="w-[55px] h-[55px] p-[10px] flex justify-center items-center border-secondary border-2 bg-[#9BD3D0]">
            <FaPhoneAlt className="text-[26px]" />
          </div>
          <div>
            <p className="text-sm uppercase text-primary font-medium mb-2">
              phone
            </p>
            <p className="text-lg md:text-xl text-secondary font-medium">
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </p>
          </div>
        </div>
        <div className=" pb-[35px] flex gap-5 ">
          <div className="w-[55px] h-[55px] p-[10px] flex justify-center items-center border-secondary border-2 bg-[#FEC447]">
            <FaEnvelope className="text-[26px]" />
          </div>
          <div>
            <p className="text-sm uppercase text-primary font-medium mb-2">
              Mail
            </p>
            <p className="text-lg md:text-xl text-secondary font-medium">
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </p>
          </div>
        </div>
        <div className=" pb-[35px] flex gap-5 ">
          <div className="w-[55px] h-[55px] p-[10px] flex justify-center items-center border-secondary border-2 bg-[#FECCB5]">
            <FaMapMarkerAlt className="text-[26px]" />
          </div>
          <div>
            <p className="text-sm uppercase text-primary font-medium mb-2">
              Address
            </p>
            <p className="text-lg md:text-xl text-secondary font-medium">
              Dagon Myothit East, Yangon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
