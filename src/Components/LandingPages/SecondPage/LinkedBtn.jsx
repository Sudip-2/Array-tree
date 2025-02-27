import React from 'react'
import { Link } from 'react-router-dom'

const LinkedBtn = ({name,text,bgClr,textClr}) => {
  return (
    <Link to={`/register/${name}`}><button className={`px-[20px] lg:px-[25px] py-[15px] lg:py-[20px] ${bgClr} ${textClr} font-semibold rounded-full mt-6`}>{text}</button></Link>
  )
}

export default LinkedBtn