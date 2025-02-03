import React from 'react'

const AddLinks = ({icon,color,linkName,register}) => {
    return (
        <>
            <div className='flex items-center gap-4'>
                <span className={`text-4xl ${color}`}>
                    {icon}
                </span>
                <input type="text" name={linkName} className='bg-navHoverGrey rounded-lg px-4 py-1' {...register(linkName)}/>
            </div>
        </>
    )
}

export default AddLinks