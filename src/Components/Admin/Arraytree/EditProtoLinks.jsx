import React from 'react'
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const EditProtoLinks = ({title,url}) => {
  return (
    <Link to={url} className='bg-white flex items-center justify-center relative py-3 rounded-full border border-gray-200'>
      <p className=''>{title}</p>

      <PiDotsThreeVerticalBold className='absolute right-2'/>
    </Link>
  )
}

export default EditProtoLinks