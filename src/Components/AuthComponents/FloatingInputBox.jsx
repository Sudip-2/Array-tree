import React from 'react'

const FloatingInputBox = ({text,type,register}) => {
    return (
        <>
            <input
                type={type}
                id={text}
                className={`bg-navHoverGrey w-full py-[15px] rounded-lg px-[20px] peer`}
                {...register(text)}
                required
            />
            <label
                htmlFor={text}
                className={`absolute left-[20px] top-[15px] text-navLinkGrey peer-focus:top-[2px] peer-focus:text-xs duration-200 peer-valid:text-xs peer-valid:top-[2px]`}
            >
                {text}
            </label>
        </>
    )
}

export default FloatingInputBox