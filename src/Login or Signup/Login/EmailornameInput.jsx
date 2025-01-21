import React from 'react'

const EmailornameInput = ({register,errors}) => {
  return (
    <>
      <input type="text" id='EmailorName' className={`bg-navHoverGrey w-full py-[15px] rounded-lg px-[20px] peer`} {...register("EmailorName", { minLength: { value: 2, message: "Usernames must be 2 Characters or Longer" } })} required />
      {errors.EmailorName && <span className='text-red-500 ml-2 text-sm'>{errors.EmailorName.message}</span>}
      <label htmlFor='EmailorName' className={`absolute left-[20px] top-[15px] text-navLinkGrey peer-focus:top-[2px] peer-focus:text-xs duration-200 peer-valid:text-xs peer-valid:top-[2px]`}>Email or Username</label>
    </>
  )
}

export default EmailornameInput