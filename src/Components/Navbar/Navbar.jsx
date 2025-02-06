import React, { useState } from 'react'
import Navbutton from './Navbutton.jsx'
import LoginBtn from './LoginBtn.jsx'
import SignupBtn from './SignupBtn.jsx'
import Navhoverbtn from './Navhoverbtn.jsx'
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import ResponsivenavText from './ResponsivenavText.jsx'
import ResNavmodal from './ResNavmodal.jsx'
import LogoutBtn from './LogoutBtn.jsx'

const Navbar = () => {

  const [navClick, setNavclick] = useState(false)

  const hamburgerNav = e => {
    setNavclick(!navClick)
  }

  return (
    <>
      <div className='bg-white sticky top-[20px] sm:top-[50px] flex justify-between items-center z-20 pl-[30px] pr-[15px] py-[8px] sm:py-[13px] rounded-full mx-[15px] sm:mx-[32px] mt-[20px] sm:mt-[50px] '>
        {/* Part 1 */}
        <div className='flex'>

          <img src="logo.svg" alt="svg logo of array tree" className='w-[30px]' />

          <div className='hidden lg:flex'>
            <Navbutton name="Marketplace" />
            <Navhoverbtn name="Discover" data={["Arraytree for Instagram", "Arraytree for LinkedIn", "Arraytree for Facebook"]} />
            <Navbutton name="Pricing" />
            <Navhoverbtn name="Learn" data={["The 2025 Creator Report", "All articles", "Creators", "Trends"]} />
          </div>

        </div>

        {/* Part 2 */}
        <div className='flex gap-3 items-center'>
          <LogoutBtn/>
          <LoginBtn />
          <SignupBtn />
          <span
            onClick={hamburgerNav}
            className='cursor-pointer block lg:hidden text-4xl'
          >
            {navClick ? <RxCross2 /> : <IoReorderThreeOutline />}
          </span>
        </div>

      </div>

      <div className={`overflow-x-hidden w-screen ${navClick ? "static" : "relative"}`}>
        <div className={`bg-responsiveNavbarBgClr min-h-svh w-screen absolute top-0 z-10 duration-300 ${navClick ? "right-[0]" : "right-[-100vw]"} flex flex-col items-center py-36 sm:py-48`}>
          <ResponsivenavText text={"Marketplace"} />
          <ResNavmodal text={"Discover"} list={["Arraytree for Instagram", "Arraytree for LinkedIn", "Arraytree for Github"]} />
          <ResponsivenavText text={"Pricing"} />
          <ResNavmodal text={"Learn"} list={["Arraytree for Instagram", "Arraytree for LinkedIn", "Arraytree for Github"]} />
        </div>
      </div>
    </>
  )
}

export default Navbar