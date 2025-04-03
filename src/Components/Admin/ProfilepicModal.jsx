import React from 'react'
import userPic from '../../Assets/userPic.webp'

const Profilepicmodal = () => {
  return (
    <div className='fixed bg-white p-3 flex top-[70px] rounded-xl gap-2 items-center border md:left-3 lg:left-14 shadow-lg'>
      <div className='bg-black w-7 h-7 rounded-full'>
        <img src={userPic} alt="image of users profile" className='w-full h-full object-cover' />
      </div>
      <div className='text-gray-700 flex-col'>
        <p className='font-medium text-[14px] flex justify-between'>Gintoki<span className='border px-2 rounded-full'>Free</span></p>
        <p className='font-medium text-[14px] mt-[1px]'>arraytr.ee/gintoki27</p>
      </div>
    </div>
  )
}

export default Profilepicmodal