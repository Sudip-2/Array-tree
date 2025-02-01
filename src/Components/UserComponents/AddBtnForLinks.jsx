import React from 'react'

const AddBtnForLinks = ({icon,color}) => {
    return (
        <>
            <div className={`text-5xl ${color} mx-auto cursor-pointer bg-white`}>
                {icon}
            </div>
        </>
    )
}

export default AddBtnForLinks