import React from 'react'

const ExampleSite = ({img,imgName}) => {
    return (
        <>
            <div className="w-[150px] h-[100px] sm:w-[220px] sm:h-[150px]">
                <img
                    src={img}
                    alt= {imgName}
                    className="object-cover w-full h-full rounded-[30px]"
                />
            </div>
        </>
    )
}

export default ExampleSite