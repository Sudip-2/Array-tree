import React from 'react'

const AddBtnForLinks = ({icon,color,addlink}) => {
    return (
        <>
            <div className={`text-5xl ${color} mx-auto cursor-pointer`}
            onClick={addlink}
            >
                {icon}
            </div>
        </>
    )
}

export default AddBtnForLinks