import React from "react";
import { Link } from "react-router-dom";

const LogoutBtn = ({ onclickfunction }) => {
  return (
    <button
      onClick={onclickfunction}
      className="py-[12px] sm:py-[18px] px-[12px] sm:px-[25px] text-sm bg-navHoverGrey hover:bg-gray-200 rounded-xl font-medium"
    >
      Log out
    </button>
  );
};

export default LogoutBtn;
