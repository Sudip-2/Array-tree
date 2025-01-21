import React from 'react'
import { Link } from 'react-router-dom'

const Violetunderline = ({to,text}) => {
  return (
    <Link to={to} className='text-loginBtnClr underline'>{text}</Link>
  )
}

export default Violetunderline