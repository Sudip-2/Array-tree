import React from 'react'
import { LuUserPen } from "react-icons/lu";
import Dashnavlink from './Dashnavlink';
import { SiGoogleanalytics } from "react-icons/si";
import { FaUserPen } from "react-icons/fa6";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";

const Dashnav = () => {
    return (
        <>
            <div className='flex justify-around fixed bottom-0 border w-full bg-white px-4 py-2'>

                <Dashnavlink link={"/dashboard"} icon={<AiOutlineProduct />} text={"My Linktree"} iconTwo={<AiFillProduct />}/>

                <Dashnavlink link={"/dashboard/analytics"} icon={<TbBrandGoogleAnalytics />} iconTwo={<SiGoogleanalytics />} text={"Analytics"}/>

                <Dashnavlink link={"/dashboard/profile"} icon={<LuUserPen/>} iconTwo={<FaUserPen />} text={"My Profile"}/>

            </div>
        </>
    )
}

export default Dashnav