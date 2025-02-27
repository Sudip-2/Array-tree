import React from 'react'

const ListsPhone = ({liOne,litwo,liThree}) => {
    return (
        <>
            <li className="font-semibold bg-white w-full py-[5px] sm:py-3 rounded-full text-[0.7rem] sm:text-xs">
                {liOne}
            </li>
            <li className="font-semibold bg-white w-full py-[5px] sm:py-3 rounded-full mt-[10px] text-[0.7rem] sm:text-xs">
                {litwo}
            </li>
            <li className="font-semibold bg-white w-full py-[5px] sm:py-3 rounded-full mt-[10px] text-[0.7rem] sm:text-xs">
                {liThree}
            </li>
        </>
    )
}

export default ListsPhone