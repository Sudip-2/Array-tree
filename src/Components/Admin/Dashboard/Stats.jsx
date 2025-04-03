import React, { useContext } from 'react'
import StatsContainers from './StatsContainers'
import { FaRegEye } from "react-icons/fa6";
import { PiCursorClickLight } from "react-icons/pi";
import { TbHandClick } from "react-icons/tb";
import { SlUserFollow } from "react-icons/sl";
import Mycontext from '../../../util/Mycontext'

const Stats = () => {

  const{Views,ClickRate,Clicks,Subscribers} = useContext(Mycontext)
  return (
    <div className='bg-white p-7 rounded-2xl mt-6'>

      <abbr title="Show the lifetime stats of your arraytree" className='no-underline'>
        <h1 className='text-xl font-semibold'>
          Lifetime
        </h1>
      </abbr>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-5'>
        <StatsContainers text={"Views"} icons={<FaRegEye/>} nums={Views}/>
        <StatsContainers text={"% Click rate"} icons={<PiCursorClickLight />} nums={ClickRate}/>
        <StatsContainers text={"Clicks"} icons={<TbHandClick/>} nums={Clicks}/>
        <StatsContainers text={"Subscribers"} icons={<SlUserFollow />} nums={Subscribers}/>
      </div>
    </div>
  )
}

export default Stats