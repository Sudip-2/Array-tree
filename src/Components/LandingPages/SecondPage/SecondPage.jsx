import React, { useEffect, useState } from 'react'
import LinkedBtn from './LinkedBtn'
import SecondPagePara from './SecondPagePara.jsx'
import SecondPageHeading from './SecondPageHeading.jsx'
import SecondPAniFirst from './SecondPAniFirst.jsx'
import { useMotionValue, useSpring, useTransform } from 'motion/react'
import SecondPAniSecond from './SecondPAniSecond.jsx'
import { AnimatePresence, motion } from 'framer-motion'

const SecondPage = () => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect()

        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    let arr = [<SecondPAniSecond key="second"/>, <SecondPAniFirst key="first" rotateX={rotateX} rotateY={rotateY}/>]
    let [index, setIndex] = useState(0)
    let changeImg = () => {
        setIndex((prev) => (prev + 1) % 2)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            changeImg()
        }, 3000)
        return () => clearInterval(interval)
    }, [])  

    return (
        <div className='bg-secondPageBgClr'
            onMouseMove={handleMouseMove}>
            <div className='min-h-svh sm:mx-[60px] 2xl:mx-auto lg:max-w-[1536px] px-8 lg:grid lg:grid-cols-2'>

                <div className='order-2 pt-16 pb-10 lg:flex lg:flex-col justify-center'>
                    <SecondPageHeading text={"Create and customize your Linktree in minutes"} clr={"text-secondPageTextClr"} />
                    <SecondPagePara text={"Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert."} clr={"text-secondPageTextClr"} />
                    <LinkedBtn text={"Get started for free"} bgClr={"bg-secondPageTextClr"} textClr={"text-white"} />
                </div>

                <motion.div className=' order-1 h-screen flex justify-center items-center'
                onClick={changeImg}>
                    <AnimatePresence mode='wait'>
                        {arr[index]}
                    </AnimatePresence>
                </motion.div>

            </div>
        </div>
    )
}

export default SecondPage