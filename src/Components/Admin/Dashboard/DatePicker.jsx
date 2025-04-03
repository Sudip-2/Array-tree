import React, { useContext, useState } from 'react'
import { CiCalendar } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import AnalyticsDateModal from './AnalyticsDateModal';
import Mycontext from '../../../util/Mycontext';

const DatePicker = () => {

      let date = new Date()
      let monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const {isDateModal,setIsDateModal,statsDate} = useContext(Mycontext)
      let startDate = new Date()
      startDate.setDate(date.getDate() - statsDate)

    return (
        <div className={`bg-white flex justify-between items-center rounded-lg p-3 cursor-pointer hover:outline-2 hover:outline-gray-200 relative`}
            onClick={() => setIsDateModal(!isDateModal)}>
            <div className='flex items-center gap-1'>
                <span>
                    <CiCalendar />
                </span>
                {monthArr[startDate.getMonth()]} {startDate.getDate()} to {monthArr[date.getMonth()]} {date.getDate()}
            </div>
            <FaAngleDown className='text-gray-400' />

            {isDateModal && <div className='absolute top-16 right-0 bg-white w-auto py-5 pl-5 pr-16 rounded-2xl shadow-lg'
                onClick={(e) => e.stopPropagation()}
            >

                <AnalyticsDateModal text={"Last 7 days"} val={"6"} />
                <div className='mt-4'>
                    <AnalyticsDateModal text={"Last 28 days"} val={"27"} />
                </div>
                <div className='mt-4'>
                    <AnalyticsDateModal text={"Last 90 days"} val={"89"} />
                </div>
                <div className='mt-4'>
                    <AnalyticsDateModal text={"Last 365 days"} val={"364"} />
                </div>

            </div>}
        </div>
    )
}

export default DatePicker