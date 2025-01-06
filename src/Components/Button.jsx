import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";

const Button = ({ to, text, color }) => {
  return (
    <div className="my-3">
      <NavLink   smooth to={to}>
        <span
          style={{ color: `${color && color}` }}
          className="border-white border py-3 px-8 rounded-md text-base font-medium transition-colors duration-300 ease-in-out transform hover:bg-[#104cba] hover:text-white hover:border-[#104cba]  active:opacity-70"
        >
          {text}
        </span>
      </NavLink>
    </div>
  );
};

export default Button;