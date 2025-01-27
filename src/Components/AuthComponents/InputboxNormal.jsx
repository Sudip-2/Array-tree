import React from 'react'

const InputboxNormal = ({type,label,forId,placeholder}) => {
    return (
        <>
        <div className='flex flex-col'>
            <label htmlFor={forId}>{label}</label>
            <input type={type} id={forId} className='bg-navHoverGrey p-2 rounded-lg w-full' placeholder={placeholder} />
        </div>
        </>
    )
}

export default InputboxNormal