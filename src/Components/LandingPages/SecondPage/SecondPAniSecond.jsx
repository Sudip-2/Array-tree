import React from 'react'
import { motion } from 'framer-motion'

const SecondPAniSecond = () => {

  let img3 = "https://edge.website.production.linktr.ee/static/8ea4b70b3505792df8a09eec7cb77ba8/bbc48/CreateSilhouette.webp"
  let img4 = "https://edge.website.production.linktr.ee/static/1c208dba1335229b4c960b7b1e4c71e9/c23fa/CreatePerson.png"

  return (
    <>
      <div className='flex gap-[70px] cursor-pointer'>

        {/* Profile Pic */}
        <div className='relative bottom-[2px]'>
          <motion.div className='absolute w-14 h-14 overflow-hidden rounded-full'>
            <img src={img3} alt="" className='w-full object-cover' />
          </motion.div>

          {/* Main guy */}
          <motion.div className='absolute w-14 h-14 overflow-hidden rounded-full'>
            <img src={img4} alt="img1" className='w-full object-cover' />
          </motion.div>
        </div>

        {/* Name btn*/}
          <button className="flex items-center bg-white py-4 px-4 w-44 rounded-full text-xs font-semibold gap-3">
            <img src="logo.svg" alt="svg logo of array tree" className="w-[15px]" />
            Arraytree/shopavery
          </button>

      </div>
    </>
  )
}

export default SecondPAniSecond