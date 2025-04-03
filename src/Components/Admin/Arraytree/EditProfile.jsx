import React, { useContext } from 'react'
import EditProfilemodalBtn from './EditProfilemodalBtn'
import Mycontext from '../../../util/Mycontext'

const EditProfile = () => {

  const{setIsEditProfileModalNandBOpen,profileImage,nameAndBio} = useContext(Mycontext)
  return (
    <div className='flex items-center justify-between gap-2'>

      <div className='bg-black w-[65px] h-[65px] rounded-full cursor-pointer'>
        <img src={profileImage} alt="userimage" className='w-full h-full object-cover rounded-full'/>
      </div>

      <div className='w-[70%]'
      onClick={() => setIsEditProfileModalNandBOpen(true)}>
        <h3 className='font-medium text-[1.05rem] hover:underline cursor-pointer'>{nameAndBio.name}</h3>
        <p className='h-7 overflow-hidden font-medium whitespace-nowrap text-ellipsis w-full text-navLinkGrey hover:underline cursor-pointer'>{nameAndBio.bio}</p>
      </div>

      <div className=''>
        <EditProfilemodalBtn />
      </div>

    </div>
  )
}

export default EditProfile