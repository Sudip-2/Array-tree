import React, { useState } from 'react'
import { FaChevronUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const ResNavmodal = ({ text, list }) => {

    const [handlereseInsideNavclick, setHandleresInsideNavclick] = useState(false)
    const handleresponsiveInsideNav = e => {
        setHandleresInsideNavclick(!handlereseInsideNavclick)
    }
    return (
        <div className='border-b border-black w-[80%] min-h-[75px] cursor-pointer pt-4  text-responsiveNavbartextClr'
            onClick={handleresponsiveInsideNav}
        >
            <div className='flex items-center justify-between'>
                <button className='font-headingFont font-extrabold text-3xl'>{text}</button>
                <span className='text-2xl mr-4'>{handlereseInsideNavclick ? <FaAngleDown /> : <FaChevronUp />}</span>
            </div>
            <ul className={`${handlereseInsideNavclick ? "block" : "hidden"} font-bold text-xl`}>
                {list.map((item,index) => {
                    return (
                        <li className='hover:bg-white my-4 py-2' key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ResNavmodal