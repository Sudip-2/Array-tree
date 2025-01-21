import React from 'react'

const Navbutton = ({name}) => {
  return (
    <>
    <button className='text-navLinkGrey text-base font-medium px-[15px] py-[10px] hover:bg-navHoverGrey rounded-xl'>{name}</button>
    </>
  )
}

export default Navbutton