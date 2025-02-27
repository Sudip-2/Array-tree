import React from 'react'

const ButtonofPhone = ({iconOne,iconTwo,iconThree}) => {
    return (
        <>
            <button className="text-sm sm:text-xl bg-white p-[15px] rounded-full">
                {iconOne}
            </button>
            <button className="text-sm sm:text-xl bg-white p-[15px] rounded-full">
                {iconTwo}
            </button>
            <button className="text-sm sm:text-xl bg-white p-[15px] rounded-full">
                {iconThree}
            </button>
        </>
    )
}

export default ButtonofPhone