import React from 'react'

const Bigheading = ({text1,text2,nextPage}) => {
  return (
    <div className={`text-center ${nextPage?"hidden":"block"}`}>
      <h1 className={`font-headingFont font-bold text-4xl sm:text-5xl tracking-tighter`}>{text1}</h1>
      <p className='text-navLinkGrey'>{text2}</p>
    </div>
  )
}

export default Bigheading