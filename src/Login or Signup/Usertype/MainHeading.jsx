import React from 'react'

const MainHeading = ({text1,text2}) => {
  return (
    <div className={`text-center`}>
      <h1 className={`font-headingFont font-bold text-4xl sm:text-5xl tracking-tighter`}
      style={{
        lineHeight:'60px'
      }}
      >{text1}</h1>
      <p className='text-navLinkGrey text-lg mt-2'>{text2}</p>
    </div>
  )
}

export default MainHeading