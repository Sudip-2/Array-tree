import React from 'react'

const BgPhone = ({image,name}) => {
    return (
        <>
            <img
                src={image}
                alt={name}
                className="object-cover w-full h-full rounded-[40px]"
            />

        </>
    )
}

export default BgPhone