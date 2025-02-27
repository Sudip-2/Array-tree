import React from 'react'

const PicAndnamePhone = ({profilePic,altName,name,title}) => {
    return (
        <>
            <div className="absolute flex flex-col items-center inset-0 top-7 sm:top-[40px] gap-1 sm:gap-[10px]">
                <div className="sm:w-[65px] sm:h-[65px] w-12 h-12 rounded-full">
                    <img
                        src={profilePic}
                        alt={altName}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>

                <div className="text-center leading-5">
                    <p className="text-white font-semibold text-xs sm:text-sm">{name}</p>
                    <p className="text-white text-[0.7rem] sm:text-xs">{title}</p>
                </div>
            </div>
        </>
    )
}

export default PicAndnamePhone