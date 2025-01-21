import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({register,errors}) => {

  const [show, setShow] = useState(true)
  const [typeOfpassword, setTypeOfpassword] = useState("password")

  const passwordEye = (e) => {
    e.preventDefault()
    setShow(!show)
    setTypeOfpassword((prev) => prev == "text" ? "password" : "text")
  }
  return (
    <>
      <input type={typeOfpassword} id='password' className={`bg-navHoverGrey w-full py-[15px] rounded-lg px-[20px] peer`} {...register("Password")} required />
      {errors.Password && <span className='text-red-500 ml-2 text-sm'>{errors.Password.message}</span>}
      <label htmlFor='password' className={`absolute left-[20px] top-[15px] text-navLinkGrey peer-focus:top-[2px] peer-focus:text-xs duration-200 peer-valid:text-xs peer-valid:top-[2px]`}>Password</label>
      <button
        onClick={passwordEye}
      >
        <FaRegEye className={`absolute right-[10px] top-[20px] cursor-pointer ${show ? "inline" : "hidden"}`} />
        <FaRegEyeSlash className={`absolute right-[10px] top-[20px] cursor-pointer ${show ? "hidden" : "inline"}`} />
      </button>
    </>
  )
}

export default PasswordInput