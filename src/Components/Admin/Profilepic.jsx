import React, { useState } from 'react'
import userPic from '../../Assets/userPic.webp'
import { FaAngleDown } from "react-icons/fa6";
import Profilepicmodal from './Profilepicmodal';

const Profilepic = () => {

  const [showProfileModal, setShowProfileModal] = useState(false)

  return (
    <div className='inline-flex items-center gap-3 hover:bg-black hover:bg-opacity-10 hover:cursor-pointer hover:rounded-xl p-2 w-auto relative'
      onClick={() => setShowProfileModal(!showProfileModal)}
    >

      <div className='bg-black w-6 rounded-full'>
        <img src={userPic} alt="image of users profile" className='w-full h-full object-cover' />
      </div>

      {showProfileModal && <Profilepicmodal />}

      <div className='flex items-center gap-1 text-gray-700'>
        <p className='font-medium text-[15px]'>Gintoki</p>
        <FaAngleDown className='text-navLinkGrey' />
      </div>

    </div>
  )
}

export default Profilepic