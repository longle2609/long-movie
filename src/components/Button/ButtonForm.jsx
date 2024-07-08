import React from "react";
import "./ButtonForm.scss";

const ButtonForm = () => {
  return (
    <div className="btn-form mt-2 mb-10">
      <button
        type="submit"
        className="py-5 px-10 text-sm h-[30px] uppercase text-white font-bold flex justify-center items-center"
      >
        Login
      </button>
    </div>
  );
};

export default ButtonForm;
