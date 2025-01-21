import React from 'react'
import { Link } from 'react-router-dom'

const SignupBtn = () => {
  return (
    <Link to={'/register/undefined'}>
    <button className='py-[14px] sm:py-[18px] px-[25px] bg-gray-800 hover:bg-gray-700 text-white rounded-full font-semibold'>Sign up free</button>
    </Link>
  )
}

export default SignupBtn