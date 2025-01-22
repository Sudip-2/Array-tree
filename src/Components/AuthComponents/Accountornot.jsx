import React from 'react'
import Violetunderline from './Violetunderline.jsx'

const Accountornot = ({text1,text2,to}) => {
  return (
    <p className='text-navLinkGrey mt-[30px]'>{text1} <Violetunderline to={to} text={text2}/></p>
  )
}

export default Accountornot