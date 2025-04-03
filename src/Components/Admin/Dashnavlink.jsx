import React from "react";
import { Link, useLocation } from "react-router";

const Dashnavlink = ({ link, icon, iconTwo, text }) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <Link
      to={link}
      className={`flex flex-col items-center ${isActive ? "text-black" : "text-gray-400"}`}
    >
      <span className={`text-3xl ${isActive ? "text-black" : "text-gray-400"}`}>
        {isActive ? iconTwo : icon}
      </span>
      <p className={`text-[0.68rem] ${isActive ? "text-black" : "text-gray-500"}`}>
        {text}
      </p>
    </Link>
  );
};

export default Dashnavlink;
