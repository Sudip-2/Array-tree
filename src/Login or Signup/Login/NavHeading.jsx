import React from 'react'
import GreenLogo from '../../../public/greenlogo.svg'
import { Link } from 'react-router-dom'

const NavHeading = () => {
  return (
      <Link to={'/'}
        className='flex items-center text-2xl font-semibold'
      >
        <p>Arraytree</p>
        <img src={GreenLogo} alt="logo" />
      </Link>
  )
}

export default NavHeading