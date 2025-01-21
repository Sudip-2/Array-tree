import React, { useState } from 'react'
import MainHeading from './MainHeading'
import Categories from './Categories'

const UsertypeGoal = () => {

  const [progress, setProgress] = useState(30)
  return (
    <>
      <div className='bg-white h-full min-h-svh pt-6'>

        {/* Outer progress bar container */}
        <div className="w-[120px] bg-gray-200 rounded-full h-1 overflow-hidden mx-auto">
          {/* Inner progress bar (dynamic width) */}
          <div
            className="bg-loginBtnClr h-1 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {/* outline outline-black */}
        <div className='max-w-[512px] mx-auto'>

          <div className='px-3 mt-16'>
            <MainHeading text1={"Which best describes your goal for using Arraytree?"} text2={"This helps us personalize your experience."} />
          </div>

          {/* Categories box*/}
          <div>

            {/* Categories */}
            <Categories/>

          </div>

        </div>

      </div>
    </>
  )
}

export default UsertypeGoal