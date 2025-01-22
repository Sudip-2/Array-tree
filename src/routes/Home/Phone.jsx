import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import sudipWebpic from "../../assets/sudipWebsite.png";

const Phone = ({ rotateX, rotateY }) => {
  return (
    <>
      <motion.div
        style={{
          transformStyle: "preserve-3d", //preserve 3d let us the z axis that is toward or away from us
          rotateX,
          rotateY,
        }}
        className="relative w-[250px] h-[500px] cursor-pointer mx-auto lg:mt-[-100px]"
        initial={{
          rotateY: 0,
          // skew:"-6deg",
        }}
        animate={{
          rotateY: 360,
          // skew:0
        }}
        transition={{
          duration: 0.6,
          delay: 3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <img
          src="https://imgs.search.brave.com/7wjuDHdtIt2AOgyv5gvEv5bJaGctRtqIApVf0pl7Rh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM2L2Iz/LzU5LzM2YjM1OWZh/ZDk4MjlkNGU0OTIy/ZTAyOGE4ZmY5YzJj/LmpwZw"
          alt=""
          className="object-cover w-full h-full rounded-[40px]"
        />

        {/* profile pic name and link list */}
        <div className="absolute flex flex-col items-center inset-0 top-[40px] gap-[10px]">
          <div className="w-[65px] h-[65px] rounded-full">
            <img
              src="https://imgs.search.brave.com/kEtn0XE6X4atlwH2kTmpDEGHnBcPLWxTw6xIDQ-9kgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzAyL2dpbnRv/a2ktcy1mYW1vdXMt/c3RyYXdiZXJyeS1t/aWxrLXNwZWVjaC1p/bi1naW50YW1hLmpw/Zw"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="text-center leading-5">
            <p className="text-white font-semibold text-sm">Sudip Paul</p>
            <p className="text-white text-xs">Professional Web developer</p>
          </div>
        </div>

        <ul
          className="text-center w-[90%] absolute inset-0 top-[165px] left-[12px]"
          style={{
            transform: "translateZ(35px)",
          }}
        >
          <li className="font-semibold bg-white w-full py-[10px] rounded-full text-xs">
            Latest Project
          </li>
          <li className="font-semibold bg-white w-full py-[10px] rounded-full mt-[10px] text-xs">
            Visit Movie Manager
          </li>
          <li className="font-semibold bg-white w-full py-[10px] rounded-full mt-[10px] text-xs">
            Follow on LinkedIn
          </li>
        </ul>

        {/* Buttons */}
        <div
          className="absolute flex gap-[10px] bottom-[80px] right-[-85px]"
          style={{
            transform: "translateZ(55px)",
          }}
        >
          <button className="text-xl bg-white p-[15px] rounded-full">
            <FaLinkedinIn />
          </button>
          <button className="text-xl bg-white p-[15px] rounded-full">
            <FaLinkedinIn />
          </button>
          <button className="text-xl bg-white p-[15px] rounded-full">
            <FaLinkedinIn />
          </button>
        </div>

        {/* sample */}
        <div
          className="absolute bottom-[80px] left-[-120px] "
          style={{
            transform: "translateZ(75px)",
          }}
        >
          <div className="w-[220px] h-[150px]">
            <img
              src={sudipWebpic}
              alt=""
              className="object-cover w-full h-full rounded-[30px]"
            />
          </div>
        </div>

        {/* background prop */}
        <div
          className="absolute w-[200px] h-[150px] top-[80px] right-[-120px] z-[-1]"
          style={{
            transform: "translateZ(-35px)",
          }}
        >
          <img
            src="https://imgs.search.brave.com/oc5k8XLRepkf5f6wvAnMk7g8ZW0xOTFEirLXgt0ah7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAzL2Ni/LzI1LzAzY2IyNWJk/ODY1YWMwODZkYTkx/ZWFiZTRjODhjYTE0/LmpwZw"
            alt=""
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Phone;
