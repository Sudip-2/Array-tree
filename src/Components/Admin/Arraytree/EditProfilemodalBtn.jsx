import React, { useContext } from 'react'
import { BsThreeDots } from "react-icons/bs";
import EditProfileModal from './EditProfileModal';
import Mycontext from '../../../util/Mycontext';
import EditprofileNameandBio from './EditprofileNameandBio';
import ResizeImage from './ResizeImage';

const EditProfilemodalBtn = () => {

  const { isEditProfileModalOpen, setIsEditProfileModalOpen, isResizeimageModalOpen, isResizeBgimageModalOpen, isResizethumbnailModalOpen } = useContext(Mycontext)
  return (
    <>
      <button className='text-xl bg-navHoverGrey p-3 rounded-full border relative'
        onClick={(e) => (
          setIsEditProfileModalOpen(!isEditProfileModalOpen),
          e.stopPropagation()
        )}
      >
        <BsThreeDots />

        {/* Gives option for changing profile pic, bg image, bio and title */}
        <EditProfileModal />

        {/* Resize image */}
        {isResizeimageModalOpen && <ResizeImage text={"Profile and avatar"} name={"Profile image"} id={"ProfileImage"} />}

        {/* Resize bg image */}
        {isResizeBgimageModalOpen && <ResizeImage text={"Background Image"} name={"Bg image"} id={"BgImage"} />}

        {/* Resize Thumnail */}
        {isResizethumbnailModalOpen && <ResizeImage text={"Thumbnail"} name={"thumbnail"} id={"Thumbnail"} />}

        {/* Gives the option for name and bio change */}
        <EditprofileNameandBio />

      </button>
    </>
  )
}

export default EditProfilemodalBtn