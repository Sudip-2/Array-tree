import React from 'react'

const SecondPageHeading = ({text,clr}) => {
    return (
        <div>
            <h2 className={`${clr} text-[2.8rem] leading-none font-black font-headingFont 2xl:text-[3.4rem]`}>
                {text}
            </h2>
        </div>
    )
}

export default SecondPageHeading