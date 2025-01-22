import React from 'react'
import { CiMobile2 } from "react-icons/ci";

const SigninBtn = ({ text, icon}) => {
  return (
    <button
      className='outline outline-1 outline-gray-300 py-[10px] w-full rounded-full font-semibold hover:bg-navHoverGrey hover:outline-none flex items-center justify-center gap-2'>
      <span className='text-2xl'>
        {icon}
      </span>{text}
    </button>
  )
}

export default SigninBtn