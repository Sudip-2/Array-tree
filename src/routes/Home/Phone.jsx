import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Samplesiteimg from '../../Assets/sampleSite.png'
import BgPhone from "../../Components/AnimationComps/BgPhone";
import PicAndnamePhone from "../../Components/AnimationComps/PicAndnamePhone";
import ListsPhone from "../../Components/AnimationComps/ListsPhone";
import ButtonofPhone from "../../Components/AnimationComps/ButtonofPhone";
import ExampleSite from "../../Components/AnimationComps/ExampleSite";
import BgpropofPhone from "../../Components/AnimationComps/BgpropofPhone";
import { BsTwitterX } from "react-icons/bs";

const Phone = ({ rotateX, rotateY,skew }) => {

  let [name, setName] = useState("Sudip Paul");
  let [title, setTitle] = useState("Professional Web developer");
  let [bgurl, setBgurl] = useState(
    "https://imgs.search.brave.com/7wjuDHdtIt2AOgyv5gvEv5bJaGctRtqIApVf0pl7Rh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM2L2Iz/LzU5LzM2YjM1OWZh/ZDk4MjlkNGU0OTIy/ZTAyOGE4ZmY5YzJj/LmpwZw"
  );
  let [profilePic, setProfilePic] = useState(
    "https://imgs.search.brave.com/kEtn0XE6X4atlwH2kTmpDEGHnBcPLWxTw6xIDQ-9kgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzAyL2dpbnRv/a2ktcy1mYW1vdXMt/c3RyYXdiZXJyeS1t/aWxrLXNwZWVjaC1p/bi1naW50YW1hLmpw/Zw"
  );

  return (
    <>
      <div className="flex justify-center items-center">
        <motion.div
          style={{
            transformStyle: "preserve-3d", //preserve 3d let us the z axis that is toward or away from us
            skew: skew,
            rotateX,
            rotateY
          }}
          className="relative sm:w-[250px] sm:h-[500px] cursor-pointer w-[180px] h-[360px]"
          animate={{
            skew: skew,
          }}
          transition={{
            skew:{duration:0.3}
          }}
          >
          {/* Background pic */}
          <BgPhone image={bgurl} name={"Image"} />

          {/* profile pic name and link list */}
          <PicAndnamePhone
            profilePic={profilePic}
            altName={"sudip's profile pic"}
            name={name}
            title={title}
          />

          {/* List under profile and title */}
          <ul
            className="text-center w-[90%] absolute inset-0 top-32 sm:top-[165px] left-[12px]"
            style={{
              transform: "translateZ(35px)",
            }}
          >
            <ListsPhone
              liOne={"Latest Project"}
              litwo={"Visit Movie Manager"}
              liThree={"Follow on LinkedIn"}
            />
          </ul>

          {/* Buttons */}
          <div
            className="absolute flex gap-[10px] bottom-[80px] right-[-75px] sm:right-[-85px]"
            style={{
              transform: "translateZ(55px)",
            }}
          >
            <ButtonofPhone
              iconOne={<BsTwitterX />}
              iconTwo={<FiGithub />}
              iconThree={<FaLinkedinIn />}
            />
          </div>

          {/* sample */}
          <div
            className="absolute bottom-[70px] sm:bottom-[80px] left-[-80px] sm:left-[-120px] "
            style={{
              transform: "translateZ(75px)",
            }}
          >
            <ExampleSite
              img={Samplesiteimg}
              imgName={"Sudips example site"}
            />
          </div>

          {/* background prop */}
          <div
            className="absolute w-[150px] h-[100px] sm:w-[200px] sm:h-[150px] top-[80px] right-[-80px] sm:right-[-120px] z-[-1]"
            style={{
              transform: "translateZ(-35px)",
            }}
          >
            <BgpropofPhone
              img={
                "https://imgs.search.brave.com/oc5k8XLRepkf5f6wvAnMk7g8ZW0xOTFEirLXgt0ah7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAzL2Ni/LzI1LzAzY2IyNWJk/ODY1YWMwODZkYTkx/ZWFiZTRjODhjYTE0/LmpwZw"
              }
              imgName={"sudip's Bg prop"}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Phone;
