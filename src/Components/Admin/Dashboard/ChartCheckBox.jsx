import React from 'react'
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaSquareCheck } from "react-icons/fa6";

const ChartCheckBox = ({chartColor,text,state}) => {
  
  return (
    <div className='items-center gap-3 border border-gray-200 inline-flex cursor-pointer px-4 py-2 rounded-full'>
      <div className='text-2xl'
        style={{
          color: chartColor
        }}
      >
        <IoAnalyticsOutline/>
      </div>
      <button>{text}</button>
      <div className='border w-5 h-5 bg-white rounded-md'>
      { state && <FaSquareCheck className='w-full h-full rounded-md'/> }
      </div>
    </div>
  )
}

export default ChartCheckBox