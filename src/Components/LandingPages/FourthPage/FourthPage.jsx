import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import LinkedBtn from '../SecondPage/LinkedBtn'
import SecondPagePara from '../SecondPage/SecondPagePara'
import SecondPageHeading from '../SecondPage/SecondPageHeading.jsx'
import imgOne from '../../../Assets/FourthOne.svg'
import imgTwo from '../../../Assets/FourthTwo.svg'
import imgThree from '../../../Assets/FourthThree.svg'
import imgFour from '../../../Assets/FourthFour.svg'
import imgFive from '../../../Assets/FourthFive.svg'
import imgSix from '../../../Assets/FourthSix.svg'
import imgSeven from '../../../Assets/FourthSeven.svg'
import imgEight from '../../../Assets/FourthEight.svg'
import FlipAni from './FlipAni'

const FourthPage = () => {

    return (
        <>
            <div className='bg-white'>
                <div className='min-h-svh sm:mx-[60px] 2xl:mx-auto lg:max-w-[1536px] px-8 lg:grid lg:grid-cols-2 gap-3'>

                    <div className='order-2 pt-16 pb-10 lg:flex lg:flex-col justify-center'>
                        <SecondPageHeading text={"Analyze your audience and keep your followers engaged"} clr={"text-black"} />
                        <SecondPagePara text={"Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back."} clr={"text-black"} />
                        <LinkedBtn text={"Get started for free"} bgClr={"bg-secondPageBgClr"} textClr={"text-black"} />
                    </div>

                    <div className=' order-1 h-screen flex justify-center items-center'>

                        <div className='grid grid-cols-3 gap-4 place-items-center'>
                            <div className=' col-span-2 cursor-pointer'>
                                <FlipAni myArray={[imgOne, imgTwo]} time={3000}/>
                            </div>
                            <div className=' cursor-pointer'>
                                <FlipAni myArray={[imgThree, imgFour]} time={4000}/>
                            </div>
                            <div className=' cursor-pointer'>
                                <FlipAni myArray={[imgFive, imgSix]} time={4500}/>
                            </div>
                            <div className=' col-span-2 cursor-pointer'>
                                <FlipAni myArray={[imgSeven, imgEight]} time={3500}/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default FourthPage