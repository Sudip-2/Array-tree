import React from 'react'
import Profilepic from './Profilepic.jsx'
import DashNavlinkB from './DashNavlinkB.jsx'
import { AiOutlineProduct } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { SiGoogleanalytics } from "react-icons/si";
import { LuUserPen } from "react-icons/lu";
import { FaUserPen } from "react-icons/fa6";

const navLinksArray = [
  { link: "/dashboard", text: "My Arraytree" ,iconOne:<AiOutlineProduct />, iconTwo:<AiFillProduct />},
  { link: "/dashboard/analytics", text: "Analytics" ,iconOne:<TbBrandGoogleAnalytics />, iconTwo:<SiGoogleanalytics />},
  { link: "/dashboard/profile", text: "My Profile" ,iconOne:<LuUserPen />, iconTwo:<FaUserPen />},
]

const DashnavB = () => {
  return (
    <>
      <div className='bg-navHoverGrey min-h-full p-4 pt-6 '>

        <Profilepic />

        <div className='mt-4'></div>
        {navLinksArray.map((link, index) => {
          return <DashNavlinkB key={index} link={link.link} text={link.text} iconOne={link.iconOne} iconTwo={link.iconTwo}/>
        })}
        
      </div>
    </>
  )
}

export default DashnavB