import React from 'react'
import { Link } from 'react-router-dom'

const LoginBtn = () => {
  return (
    <Link to={`/login`}>
    <button className='py-[12px] sm:py-[18px] px-[15px] sm:px-[25px] bg-navHoverGrey hover:bg-gray-200 rounded-xl font-medium'>Log in</button>
    </Link>
  )
}

export default LoginBtn