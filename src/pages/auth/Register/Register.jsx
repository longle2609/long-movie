import React, { useContext } from "react";
import Lottie from "react-lottie";
import registerAnimation from "../../../assets/lotties/registerAnimation.json";
import FormRegister from "../../../components/FormLogin/FormRegister";
import IconSocial from "../../../components/IconSocial/IconSocial";
import "./register.scss";
import { AlertMessage } from "../../../App";

const Register = () => {
  const { handleAlert } = useContext(AlertMessage);
  console.log(handleAlert);
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: registerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{ backgroundImage: "url(./src/assets/img/bg-login.jpg)" }}
      className="h-screen register"
    >
      {/* Form */}
      <div className="form flex justify-evenly">
        <div className="register-card text-center text-white flex flex-col gap-5">
          {/* Form Header */}
          <div>
            <h1 className="text-3xl font-bold">Sign Up</h1>
          </div>

          {/* Form Content */}
          <div>
            <FormRegister handleAlert={handleAlert} />
          </div>

          {/* Form Footer */}
          <div>
            <IconSocial />
          </div>
        </div>

        {/* Animate */}
        <div className="animate">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default Register;
