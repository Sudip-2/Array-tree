import React from 'react'

const LiveArraytreeurl = ({text}) => {
  return (
    <div className='bg-blue-200 font-medium p-4 rounded-lg text-center'>
      <p className='tracking-wider'>
        Your Arraytree is live now on <a href='https://linktr.ee/sudip29' target='_blank' className='text-blue-700 underline'>{text}</a>
      </p>
    </div>
  )
}

export default LiveArraytreeurl