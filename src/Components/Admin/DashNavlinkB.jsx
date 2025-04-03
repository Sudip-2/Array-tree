import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const DashNavlinkB = ({ link, text, iconOne, iconTwo }) => {
  const location = useLocation();
  const isActive = location.pathname === link;
  return (
    <>
      <Link to={link} className='flex items-center p-2 hover:bg-black hover:bg-opacity-10 rounded-xl gap-2'>

        <div className='text-2xl'
          style={{
            color: isActive ? '#000000' : '#676b5f'
          }}
        >
          {isActive ? iconTwo : iconOne}
        </div>
        <p className='font-medium'
          style={{
            color: isActive ? '#000000' : '#676b5f'
          }}
        >{text}</p>

      </Link>
    </>
  )
}

export default DashNavlinkB