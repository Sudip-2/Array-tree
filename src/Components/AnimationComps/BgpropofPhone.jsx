import React from 'react'

const BgpropofPhone = ({img,imgName}) => {
    return (
        <>
            <img
                src={img}
                alt={imgName}
                className="object-cover w-full h-full rounded-3xl"
            />
        </>
    )
}

export default BgpropofPhone