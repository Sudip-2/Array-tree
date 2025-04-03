import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import EditProtoLinks from './EditProtoLinks';
import Mycontext from '../../../util/Mycontext';

const EditPrototype = () => {
  const { profileImage, bgImage, nameAndBio, linkData } = useContext(Mycontext)

  return (
    <>
    <div className='h-[68vh] w-[320px] mt-10 mb-24 md:mt-0 md:mb-0 md:sticky md:top-32 relative ' >

        {/* Background image */}
        <img
          src={bgImage}
          alt="bgImage"
          className='absolute top-0 left-0 bg-blue-300 w-full h-full object-cover z-[-1] rounded-3xl '
        />

      <div className='h-[68vh] w-[320px] rounded-3xl border mt-10 mb-24 md:mt-0 md:mb-0 shadow-sm flex flex-col items-center justify-between py-10 md:sticky md:top-32 overflow-y-auto overflow-x-hidden  absolute' >


        <div className='flex flex-col items-center gap-2 w-full'>
          {/* user image  */}
          <div className='bg-black w-20 h-20 rounded-full  mx-auto'>
            <img src={profileImage} alt="userPicture" className='w-full h-full object-cover rounded-full' />
          </div>

          {/* userName */}
          <p>{nameAndBio.name}</p>

          {/* user bio */}
          <p className='mx-3 text-center'>{nameAndBio.bio}</p>

          {/* Link container */}
          <div className='w-full mt-4 px-2 flex flex-col gap-2'>
            {/* Links */}
            {linkData.length > 0 && linkData.map((item) => {
              return item.showProto && <EditProtoLinks title={item.name} url={item.link} key={item.id} />
            })}

          </div>
        </div>

        {/* Arraytree logo */}
        <div className='mt-6'>
          <Link to={"/"}>Arraytree</Link>
        </div>

      </div>

    </div>


    </>
  )
}

export default EditPrototype