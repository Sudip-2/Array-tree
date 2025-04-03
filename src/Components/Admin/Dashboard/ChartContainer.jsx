import React, { useContext } from 'react'
import Chart from './Chart'
import Mycontext from '../../../util/Mycontext'
import ChartCheckBox from './ChartCheckBox';

const ChartContainer = () => {

  const { Views, Clicks, showViews, showClickRate, showClicks, showSubs, setShowViews, setShowClickRate, setShowClicks, setShowSubs } = useContext(Mycontext)
  return (
    <div className='bg-white rounded-2xl py-10 mt-6'>

      <h2 className='text-xl font-semibold pl-7'>Activity</h2>

      <h2 className='text-base font-bold pl-7 mt-5'>Views and clicks</h2>

      <div className='flex  gap-4 pl-7 mt-3'>
        <h3>Views: <span className='font-semibold text-lg'>{Views}</span></h3>
        <h3>Clicks: <span className='font-semibold text-lg'>{Clicks}</span></h3>
      </div>

      <div className='pr-7 mt-5'>
        <Chart />

      </div>

      <div className='flex gap-4 pl-7 mt-5 flex-wrap'>
        <div
          onClick={() => setShowViews(!showViews)}
        >
          <ChartCheckBox chartColor={"#8884d8"} text={"views"} state={showViews} />
        </div>
        <div
          onClick={() => setShowClickRate(!showClickRate)}
        >
          <ChartCheckBox chartColor={"#ff7300"} text={"clickRate"} state={showClickRate} />
        </div>
        <div
          onClick={() => setShowClicks(!showClicks)}
        >
          <ChartCheckBox chartColor={"#82ca9d"} text={"clicks"} state={showClicks} />
        </div>
        <div
          onClick={() => setShowSubs(!showSubs)}
        >
          <ChartCheckBox chartColor={"#ff0000"} text={"subs"} state={showSubs} />
        </div>
      </div>

    </div>
  )
}

export default ChartContainer