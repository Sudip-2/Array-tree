import React from 'react'

const ResponsivenavText = ({text}) => {
    return (
        <div className='border-b border-black w-[80%] h-[75px] cursor-pointer hover:bg-white'>
            <button className='text-responsiveNavbartextClr font-headingFont font-extrabold text-3xl pt-4'>{text}</button>
        </div>
    )
}

export default ResponsivenavText