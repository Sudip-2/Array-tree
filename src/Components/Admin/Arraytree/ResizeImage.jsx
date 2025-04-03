import React, { useContext, useRef } from 'react'
import Mycontext from '../../../util/Mycontext'
import { RxCross2 } from "react-icons/rx";

const ResizeImage = ({ text, name, id }) => {

  const { setIsResizeimageModalOpen, setIsResizeBgimageModalOpen, setIsResizethumbnailModalOpen, setProfileImage,setBgImage } = useContext(Mycontext)
  const imageSelector = useRef(null)

  return (
    <>
      < div className='bg bg-black bg-opacity-50 w-screen h-screen fixed top-0 left-0 z-10 ' >
        <div className='fixed bg-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-6 rounded-3xl overflow-hidden'
          onClick={(e) => e.stopPropagation()}
        >

          <div className='flex items-center justify-center relative'>
            <p>{text}</p>
            <div className='absolute right-0'
              onClick={() => (
                setIsResizeimageModalOpen(false),
                setIsResizeBgimageModalOpen(false),
                setIsResizethumbnailModalOpen(false)
              )}
            >
              <RxCross2 />
            </div>
          </div>

          {/* <div className='mt-6'> */}
          <input
            type="file"
            name={name}
            id={id}
            accept="image/*"
            className="text-base font-medium mr-[-100px] mt-6 file:rounded-full file:border-none file:p-2 file:bg-blue-400 file:text-white file:cursor-pointer file:hover:bg-blue-500"
            ref={imageSelector}
          />
          {/* </div> */}

          <button className='border mt-6 w-full bg-purple-600 text-white text-base font-medium p-4 rounded-full'
            onClick={() => {
              if (id === "ProfileImage") {
                if (imageSelector.current.files.length === 0) return alert("Please select an image")
                setProfileImage(URL.createObjectURL(imageSelector.current.files[0]))
                setIsResizeimageModalOpen(false)
              } else if (id === "BgImage") {
                if (imageSelector.current.files.length === 0) return alert("Please select an image")
                setBgImage(URL.createObjectURL(imageSelector.current.files[0]))
                setIsResizeBgimageModalOpen(false)
              }
            }}
          >Save</button>

        </div>
      </div >
    </>
  )
}

export default ResizeImage