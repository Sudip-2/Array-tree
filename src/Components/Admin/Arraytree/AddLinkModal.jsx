import React, { useContext, useRef } from 'react'
import Mycontext from '../../../util/Mycontext'
import { RxCross2 } from "react-icons/rx";

const AddLinkModal = () => {
  const { isAddLinkModalOpen, setIsAddLinkModalOpen, setLinkData, linkData } = useContext(Mycontext)
  const linkTitle = useRef('');
  const linkUrl = useRef('');
  return (
    <>
      {
        isAddLinkModalOpen && < div className='bg bg-black bg-opacity-50 w-screen h-screen fixed top-0 left-0 z-10 ' >
          <div className='fixed bg-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-6 rounded-3xl'
            onClick={(e) => e.stopPropagation()}
          >

            <div className='flex items-center justify-center relative'>
              <p>Create New Link</p>
              <div className='absolute right-0'
                onClick={() => setIsAddLinkModalOpen(false)}
              >
                <RxCross2 className='cursor-pointer' />
              </div>
            </div>

            <div className='mt-10'>
              <label htmlFor="profile-title" className='mt-1 block text-left text-base font-medium'>Link title</label>
              <input type="text" id='link-title' className='w-[300px] lg:w-[500px] p-2 rounded-xl bg-navHoverGrey hover:outline hover:outline-gray-200' ref={linkTitle} />
            </div>

            <div className='mt-4'>
              <label htmlFor="profile-bio" className='block text-left text-base font-medium'>Link url</label>
              <input type="text" id='link-url' className='w-[300px] lg:w-[500px] p-2 rounded-xl bg-navHoverGrey hover:outline hover:outline-gray-200' ref={linkUrl} />
            </div>

            <button className='border mt-6 w-full bg-purple-600 text-white text-base font-medium p-4 rounded-full'
              onClick={() => {
                if (linkTitle.current.value === '' || linkUrl.current.value === '') {
                  alert('Please fill in all fields');
                  return;
                }
                setIsAddLinkModalOpen(false);
                setLinkData((prev) => [
                  {
                    name: linkTitle.current.value,
                    link: linkUrl.current.value,  
                    id: linkData.length + 1,  
                    showProto:true   
                  },...prev,
                ]);
              }}
            >Save</button>

          </div>
        </div >
      }
    </>
  )
}

export default AddLinkModal