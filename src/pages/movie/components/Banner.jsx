import React, { useEffect, useState } from "react";
import BlurLeft from "../../../assets/images/blur-left.png";
import BlurRight from "../../../assets/images/blur-right.png";
import VideoModal from "./VideoModal";
import { createPortal } from "react-dom";

// eslint-disable-next-line react/prop-types
const Banner = ({ pics }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-black relative">
      <div className="flex justify-center">
        <div className="relative">
          <img
            src={pics}
            alt=""
            className="max-h-[300px] md:w-[56rem] object-cover md:max-h-[500px]"
          />
          <div className="absolute top-0 left-0">
            <img
              src={BlurLeft}
              alt=""
              className="max-h-[300px] md:max-h-[500px]"
            />
          </div>
          <div className="absolute top-0 right-0">
            <img
              src={BlurRight}
              alt=""
              className="max-h-[300px] md:max-h-[500px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.2)] absolute inset-0"></div>
      <div
        className="absolute z-100 bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 w-[40px] md:w-[64px] h-[40px] md:h-[64px] rounded-full bg-slate-50 hover:bg-opacity-70 flex justify-center items-center cursor-pointer"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <i className="fa-solid fa-play md:text-[30px]"></i>
      </div>
      {openModal &&
        createPortal(<VideoModal setOpenModal={setOpenModal} />, document.body)}
    </div>
  );
};

export default Banner;
