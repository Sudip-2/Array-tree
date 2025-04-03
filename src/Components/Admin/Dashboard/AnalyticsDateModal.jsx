import React, { useContext } from 'react'
import Mycontext from '../../../util/Mycontext'

const AnalyticsDateModal = ({ text, val }) => {
    const { statsDate, setStatsDate, setIsDateModal } = useContext(Mycontext)

    return (
        <div
            className='flex gap-2 items-center cursor-pointer'
            onClick={() => {
                setStatsDate(parseInt(val))
                setIsDateModal(false)
            }}
        >
            <input
                type="radio"
                name="date"
                id={val}
                value={val}
                checked={statsDate === parseInt(val)}
                onChange={() => setStatsDate(parseInt(val))} // ✅ Added onChange handler
            />
            <label htmlFor={val}>{text}</label>
        </div>
    )
}

export default AnalyticsDateModal
