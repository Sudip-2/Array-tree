import React, { useContext } from 'react'
import { CiImageOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { RiGalleryFill } from "react-icons/ri";
import Mycontext from '../../../util/Mycontext';

const EditProfileModal = () => {

  const { isEditProfileModalOpen, isEditProfileModalNandBOpen, isResizeimageModalOpen, setIsEditProfileModalNandBOpen, setIsResizeimageModalOpen, isResizeBgimageModalOpen,
    setIsResizeBgimageModalOpen } = useContext(Mycontext)

  const modalLinks = [
    {
      name: 'Edit image',
      icon: <CiImageOn />,
      setModal: () => setIsResizeimageModalOpen(!isResizeimageModalOpen)
    },
    {
      name: 'Edit background image',
      icon: <RiGalleryFill />,
      setModal: () => setIsResizeBgimageModalOpen(!isResizeBgimageModalOpen)
    },
    {
      name: 'Edit display name and bio',
      icon: <IoPersonOutline />,
      setModal: () => setIsEditProfileModalNandBOpen(!isEditProfileModalNandBOpen)
    }
  ]

  return (
    <>
      {
        isEditProfileModalOpen && <div className='bg-white absolute px-4 py-2 shadow-md rounded-2xl right-0 top-12 border'>

          {modalLinks.map((link, index) => (
            <div className='flex items-center gap-4 my-4' key={index}
              onClick={link.setModal}>
              {link.icon}
              <p className='whitespace-nowrap text-base font-medium'>{link.name}</p>
            </div>
          ))}

        </div>
      }
    </>
  )
}

export default EditProfileModal