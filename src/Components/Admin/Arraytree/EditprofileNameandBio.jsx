import React, { useContext, useRef } from 'react'
import { RxCross2 } from "react-icons/rx";
import Mycontext from '../../../util/Mycontext';

const EditprofileNameandBio = () => {

  const { isEditProfileModalNandBOpen, setIsEditProfileModalNandBOpen, nameAndBio, setNameAndBio } = useContext(Mycontext)
  const name = useRef(null)
  const bio = useRef(null)
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      setNameAndBio((prev) => ({
        ...prev,
        name: name.current.value === "" ? prev.name : name.current.value,
        bio: bio.current.value === "" ? prev.bio : bio.current.value
      }));
      setIsEditProfileModalNandBOpen(false);
    }
  }

  return (
    <>
      {
        isEditProfileModalNandBOpen && < div className='bg bg-black bg-opacity-50 w-screen h-screen fixed top-0 left-0 z-10 ' >
          <div className='fixed bg-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-6 rounded-3xl'
            onClick={(e) => e.stopPropagation()}
          >

            <div className='flex items-center justify-center relative'>
              <p>Display name and bio</p>
              <div className='absolute right-0'
                onClick={() => setIsEditProfileModalNandBOpen(false)}
              >
                <RxCross2 />
              </div>
            </div>

            <div className='mt-10'>
              <label htmlFor="profile-title" className='mt-1 block text-left text-base font-medium'>Profile title</label>
              <input type="text" id='profile-title' className='w-[300px] lg:w-[500px] p-2 rounded-xl bg-navHoverGrey hover:outline hover:outline-gray-200' ref={name} onKeyDown={handleKeyDown}/>
            </div>

            <div className='mt-4'>
              <label htmlFor="profile-bio" className='block text-left text-base font-medium'>Bio</label>
              <textarea type="text" id='profile-bio' className='mt-1 block w-[300px] lg:w-[500px] p-2 rounded-xl bg-navHoverGrey hover:outline hover:outline-gray-200' rows={3} maxLength={80} ref={bio} onKeyDown={handleKeyDown}/>
            </div>

            <button className='border mt-6 w-full bg-purple-600 text-white text-base font-medium p-4 rounded-full'
              onClick={() => {
                setNameAndBio((prev) => ({
                  ...prev,
                  name: name.current.value == "" ? prev.name : name.current.value,
                  bio: bio.current.value == "" ? prev.bio : bio.current.value
                }));

                setIsEditProfileModalNandBOpen(false)
              }}
            >Save</button>

          </div>
        </div >
      }
    </>
  )
}

export default EditprofileNameandBio