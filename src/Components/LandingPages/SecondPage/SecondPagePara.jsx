import React from 'react'

const SecondPagePara = ({text,clr}) => {
    return (
        <>
            <p className={`${clr} font-medium text-lg leading-6 my-4 2xl:text-xl`}>{text}</p>
        </>
    )
}

export default SecondPagePara