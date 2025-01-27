import React from 'react'

const SelectOption = ({optData}) => {
    return (
        <>
            <select name="" id="" className='w-full bg-navHoverGrey py-[15px] rounded-lg px-[20px]'>
                {optData.map((item,index) => {
                    return(
                        <option value={item} key={index}>{item}</option>
                    )
                })}
            </select>
        </>
    )
}

export default SelectOption