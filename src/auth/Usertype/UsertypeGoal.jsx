import React, { useContext, useState } from "react";
import MainHeading from "../../Components/AuthComponents/MainHeading";
import Categories from "../../Components/AuthComponents/Categories";
import creatorPic from "../../Assets/creatorCTG.svg";
import BusinessPic from "../../Assets/businessCTG.svg";
import PersonalPic from "../../Assets/personalCTG.svg";
import Fullwidthcontbtn from "../../Components/AuthComponents/Fullwidthcontbtn";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../../context/FirebaseContext";

const UsertypeGoal = () => {
  const [progress, setProgress] = useState(0);
  const { personalgoal, setpersonalgoal } = useContext(FirebaseContext);
  let navigate = useNavigate();

  const HandleSubmit = () => {
    navigate("/register/select-price");
  };

  return (
    <>
      <div className="bg-white h-full min-h-svh pt-6 px-4">
        {/* Outer progress bar container */}
        <div className="w-[120px] bg-gray-200 rounded-full h-1 overflow-hidden mx-auto">
          {/* Inner progress bar (dynamic width) */}
          <div
            className="bg-loginBtnClr h-1 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {/* outline outline-black */}
        <div className="max-w-[512px] mx-auto pb-24 relative">
          <div className="px-3 mt-16">
            <MainHeading
              text1={"Which best describes your goal for using Arraytree?"}
              text2={"This helps us personalize your experience."}
            />
          </div>

          {/* Categories box*/}
          <div>
            {/* Categories */}
            <Categories
              textH={"Creator"}
              textP={
                "Build my following and explore ways to monetize my audience"
              }
              img={creatorPic}
              bgCLr={"Yellow"}
              val={"Creator"}
              onClick={() => {
                setProgress(100);
                setpersonalgoal("Creator");
              }}
            />
            <Categories
              textH={"Business"}
              textP={"Grow my business and reach more customers."}
              img={BusinessPic}
              bgCLr={"#9400D3"}
              val={"Business"}
              onClick={() => {
                setProgress(100);
                setpersonalgoal("Business");
              }}
            />
            <Categories
              textH={"Personal"}
              textP={
                "Build my following and explore ways to monetize my audience"
              }
              img={PersonalPic}
              bgCLr={"red"}
              val={"Personal"}
              onClick={() => {
                setProgress(100);
                setpersonalgoal("Business");
              }}
            />
          </div>

          <div
            onClick={HandleSubmit}
            className="fixed w-1/2 left-[26%] bottom-8"
          >
            <Fullwidthcontbtn disabled={personalgoal.length === 0} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UsertypeGoal;
