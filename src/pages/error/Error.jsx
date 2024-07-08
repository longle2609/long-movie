import React from "react";
import Lottie from "react-lottie";
import errorAnimation from "./../../assets/lotties/404_animation.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./error.scss";

const Error = ({ message }) => {
  const navigate = useNavigate;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errorAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{
        backgroundImage: "url(./src/assets/img/bg-login.jpg)",
      }}
      className="error h-screen flex flex-1 flex-col justify-center items-center text-white"
    >
      {/* {message} */}
      <div className="animate_error h-[40vh] flex items-center">
        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
      </div>
      <div className="opps"></div>

      <div className="back-to-home rounded-lg text-center w-[40%] space-y-5">
        <p className="heading text-5xl font-bold">404 - PAGE NOT FOUND !!!</p>
        <p>
          The page you are looking for might have been removed had its name
          changed or temporality unavailable
        </p>
      </div>
      <button className="btn bg-blue-500 py-5 px-5 mt-10 text-white w-full">
        <Link to={"/"}>Back to home</Link>
      </button>
    </div>
  );
};

export default Error;
