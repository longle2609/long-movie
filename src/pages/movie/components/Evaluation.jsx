import React from "react";
import TomatoImg from "../../../assets/images/tomato2.png";
import CakeImg from "../../../assets/images/cake2.png";

// eslint-disable-next-line react/prop-types
export default function Evaluation({ handleClickScroll }) {
  return (
    <div className=" mt-5 py-4 container-me lg:flex lg:justify-end">
      <div className="lg:w-fit">
        <div className="evaluation text-white flex flex-wrap gap-x-[30px] gap-y-[30px] md:flex-nowrap md:container-me md:items-center md:justify-center md:gap-[50px]">
          <div className="evaluationCard">
            <div>
              <img src={TomatoImg} alt="" />
              <span>88%</span>
            </div>
            <div>
              <p>Tomatometer</p>
            </div>
          </div>
          <div className="evaluationCard">
            <div>
              <img src={CakeImg} alt="" />
              <span>88%</span>
            </div>
            <div>
              <p>Audience Scorer</p>
            </div>
          </div>
          <div className="evaluationCard">
            <div className="text-[#F1481F]">
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-heart"></i>
            </div>
            <div>
              <p>Users Rating</p>
            </div>
          </div>
          <div className="evaluationCard">
            <div className="text-[#223C6E] cursor-pointer">
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-heart"></i>
            </div>
            <div>
              <p>Rate It</p>
            </div>
          </div>
        </div>
        <div className="bookTickets mt-10 mb-4 text-center">
          <span
            className="text-white text-[16px] font-bold rounded-[25px] buttonGradient py-[11px] px-[24px] cursor-pointer hover:shadow-[0px_10px_15px_0px_rgba(59,55,188,0.5)]"
            onClick={handleClickScroll}
          >
            BOOK TICKETS
          </span>
        </div>
      </div>
    </div>
  );
}
