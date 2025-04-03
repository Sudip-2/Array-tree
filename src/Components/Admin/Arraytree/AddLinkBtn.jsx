import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa6";
import Mycontext from '../../../util/Mycontext';
import AddLinkModal from './AddLinkModal.jsx'

const AddLinkBtn = () => {

  const { setIsAddLinkModalOpen } = useContext(Mycontext)
  return (
    <div>
      <button className='items-center gap-2 w-full bg-purple-600 text-white text-center flex justify-center p-3 rounded-full hover:bg-purple-800'
        onClick={() => setIsAddLinkModalOpen(true)}
      >
        <FaPlus/>
        <span className='text-lg font-medium'>Add Link</span>
      </button>
      <AddLinkModal />
    </div>
  )
}

export default AddLinkBtn