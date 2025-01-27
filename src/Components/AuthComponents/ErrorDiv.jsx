import React from 'react'

const ErrorDiv = ({text}) => {
    return (
        <div className=' text-red-500 ml-2'>
            <p>{text}</p>
        </div>
    )
}

export default ErrorDiv