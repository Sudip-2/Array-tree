import React, { useContext } from 'react'

const StatsContainers = ({text,icons,nums}) => {

  return (
    <div className='flex items-center gap-2'>

      <div className='bg-statsContainer text-lg p-2 rounded-xl text-gray-500'>
        {icons}
      </div>

      <div>
        <p><span className='font-semibold text-xl'>{nums}</span> {text}</p>
      </div>

    </div>
  )
}

export default StatsContainers