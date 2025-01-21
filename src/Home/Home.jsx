import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  let [name,setName] = useState(undefined) 

  return (

    <div className='min-h-svh bg-landingBg mx-[30px] sm:mx-[60px] lg:flex pt-[80px] sm:pt-[168px]'>

      {/* Div 1 */}
      <div className='lg:w-1/2'>

        {/* heading */}
        <div className='text-headingTextClr font-headingFont text-[2.6rem] sm:text-[2.9rem] leading-[47px] font-black'>
          <h1>Everything you are. In one, simple link in bio.</h1>
        </div>
        {/* desc */}
        <p
          className='text-headingTextClr mt-[15px] sm:mt-[25px] font-headingFont font-medium sm:leading-[25px]'
        >Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        {/* Buttons */}
        <div className='sm:flex gap-3 mt-[25px] sm:mt-[40px]'>

          <div className='relative'>
            <span className='absolute text-navLinkGrey top-[17px] left-[9px] text-[1.04rem]'>arraytr.ee/</span>
            <input type="text" className='h-[20px] py-[30px] rounded-lg pl-[86px] pr-[10px] w-[240px] text-navLinkGrey' placeholder='Your Name' onChange={(e) => setName(e.target.value)}/>
          </div>

          <Link to={`/register/${name}`}><button className='px-[20px] py-[15px] bg-claimBtn font-semibold rounded-full mt-[10px] sm:mt-0'>Claim your Arraytree</button></Link>
        </div>

      </div>

      {/* Div 2 */}
      <div className='lg:w-1/2'>

        


      </div>

    </div>

  )
}

export default Home