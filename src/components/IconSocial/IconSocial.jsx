import React from "react";
import "./iconSocial.scss";
const IconSocial = () => {
  return (
    <div>
      <div className="social my-5">
        <ul className="flex justify-center gap-5">
          <li>
            <a href="#">
              <i
                className="fa-brands fa-facebook-f"
                style={{ color: "#fff", width: "15px" }}
              ></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter" style={{ color: "#fff" }}></i>
            </a>
          </li>
          <li className="">
            <a href="#">
              <i className="fa-brands fa-google" style={{ color: "#fff" }}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IconSocial;
