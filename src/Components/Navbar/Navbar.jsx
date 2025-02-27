import React, { useContext, useState, useEffect } from "react";
import Navbutton from "./Navbutton.jsx";
import LoginBtn from "./LoginBtn.jsx";
import SignupBtn from "./SignupBtn.jsx";
import Navhoverbtn from "./Navhoverbtn.jsx";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import ResponsivenavText from "./ResponsivenavText.jsx";
import ResNavmodal from "./ResNavmodal.jsx";
import LogoutBtn from "./LogoutBtn.jsx";
import FirebaseContext from "../../context/FirebaseContext.js";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, FirebaseApp, setuser } = useContext(FirebaseContext);
  const [navClick, setNavclick] = useState(false);
  const Navigate = useNavigate();

  const hamburgerNav = () => {
    setNavclick(!navClick);
  };

  // Prevent scrolling when navbar is open
  useEffect(() => {
    if (navClick) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    
    return () => {
      document.body.classList.remove("overflow-hidden"); // Cleanup on unmount
    };
  }, [navClick]);

  return (
    <>
      <div className="bg-white outline outline-1 outline-gray-200 sticky top-[20px] sm:top-[50px] flex justify-between items-center z-20 pl-[30px] pr-[15px] py-[8px] sm:py-[13px] rounded-full 2xl:mx-auto mt-[20px] sm:mt-[50px] lg:max-w-[1536px] mx-3 sm:mx-8">
        {/* Part 1 */}
        <div className="flex items-center">
          <h3 className="font-headingFont text-2xl font-semibold hidden sm:block">Arraytree</h3>
          <img src="logo.svg" alt="svg logo of array tree" className="w-[30px]" />

          <div className="hidden lg:flex">
            <Navbutton name="Marketplace" />
            <Navhoverbtn
              name="Discover"
              data={[
                "Arraytree for Instagram",
                "Arraytree for LinkedIn",
                "Arraytree for Facebook",
              ]}
            />
            <Navbutton name="Pricing" />
            <Navhoverbtn
              name="Learn"
              data={[
                "The 2025 Creator Report",
                "All articles",
                "Creators",
                "Trends",
              ]}
            />
          </div>
        </div>

        {/* Part 2 */}
        <div className="flex gap-3 items-center">
          {user ? (
            <LogoutBtn
              onclickfunction={async () => {
                setuser(null);
                await signOut(getAuth(FirebaseApp));
                await Navigate("/");
              }}
            />
          ) : (
            <>
              <LoginBtn />
              <SignupBtn />
            </>
          )}
          <span onClick={hamburgerNav} className="cursor-pointer block lg:hidden text-4xl">
            {navClick ? <RxCross2 /> : <IoReorderThreeOutline />}
          </span>
        </div>
      </div>

      {/* Responsive Navbar */}
      <div
        className={`overflow-x-hidden w-screen overflow-hidden ${
          navClick ? "static" : "relative"
        }`}
      >
        <div
          className={`bg-responsiveNavbarBgClr min-h-svh w-screen fixed top-0 z-[11] duration-300 ${
            navClick ? "right-[0]" : "right-[-100vw]"
          } flex flex-col items-center py-36 sm:py-48`}
        >
          <ResponsivenavText text={"Marketplace"} />
          <ResNavmodal
            text={"Discover"}
            list={[
              "Arraytree for Instagram",
              "Arraytree for LinkedIn",
              "Arraytree for Github",
            ]}
          />
          <ResponsivenavText text={"Pricing"} />
          <ResNavmodal
            text={"Learn"}
            list={[
              "Arraytree for Instagram",
              "Arraytree for LinkedIn",
              "Arraytree for Github",
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
