import { motion, useAnimate } from 'motion/react'
import React, { useEffect, useState } from 'react'

const CardAnimation = () => {

    const social0 = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-0.svg"
    const social1 = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-1.svg"
    const social2 = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-2.svg"
    const social3 = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-3.svg"
    const social4 = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/social-4.svg"

    const [scope, animate] = useAnimate()
    let [index1, setIndex1] = useState(5)
    let [index2, setIndex2] = useState(4)
    let [index3, setIndex3] = useState(3)
    let [index4, setIndex4] = useState(2)
    let [index5, setIndex5] = useState(1)
    let index = 1

    let zforfirst = [5, 1, 2, 3, 4, 5]
    let zforsecond = [4, 5, 1, 2, 3, 4]
    let zforthird = [3, 4, 5, 1, 2, 3]
    let zforfourth = [2, 3, 4, 5, 1, 2]
    let zforfifth = [1, 2, 3, 4, 5, 1]

    const sequenceAni = async () => {
        setInterval(() => {
            setIndex1(zforfirst[index])
            setIndex2(zforsecond[index])
            setIndex3(zforthird[index])
            setIndex4(zforfourth[index])
            setIndex5(zforfifth[index])
            index++
            if (index === 6) {
                index = 0
            }
        }, 1000)

        // 32 - 64 - 96 - 128 
        // 48 - 96 - 144 - 192

        animate("#target1", { x: [0, 192, 144, 96, 48, 0], y: [0, -192, -144, -96, -48, 0], opacity: [0.1, 0, 1, 1, 1, 1] }, { duration: 6, repeat: Infinity })
        animate("#target2", { x: [0, -48, 144, 96, 48, 0], y: [0, 48, -144, -96, -48, 0], opacity: [1, 1, 0, 0, 1, 1] }, { duration: 6, repeat: Infinity })
        animate("#target3", { x: [0, -48, -96, 96, 48, 0], y: [0, 48, 96, -96, -48, 0], opacity: [1, 1, 1, 0, 0, 1] }, { duration: 6, repeat: Infinity })
        animate("#target4", { x: [0, -48, -96, -144, 48, 0], y: [0, 48, 96, 144, -48, 0], opacity: [1, 1, 1, 1, 0, 0] }, { duration: 6, repeat: Infinity })
        animate("#target5", { x: [0, -48, -96, -144, -192, 0], y: [0, 48, 96, 144, 192, 0], opacity: [0, 1, 1, 1, 1, 0] }, { duration: 6, repeat: Infinity })


        animate("#target6", { x: [0, 128, 96, 64, 32, 0], y: [0, -128, -96, -64, -32, 0], opacity: [0.1, 0, 1, 1, 1, 1] }, { duration: 6, repeat: Infinity })
        animate("#target7", { x: [0, -32, 96, 64, 32, 0], y: [0, 32, -96, -64, -32, 0], opacity: [1, 1, 0, 0, 1, 1] }, { duration: 6, repeat: Infinity })
        animate("#target8", { x: [0, -32, -64, 64, 32, 0], y: [0, 32, 64, -64, -32, 0], opacity: [1, 1, 1, 0, 0, 1] }, { duration: 6, repeat: Infinity })
        animate("#target9", { x: [0, -32, -64, -96, 32, 0], y: [0, 32, 64, 96, -32, 0], opacity: [1, 1, 1, 1, 0, 0] }, { duration: 6, repeat: Infinity })
        animate("#target10", { x: [0, -32, -64, -96, -128, 0], y: [0, 32, 64, 96, 128, 0], opacity: [0, 1, 1, 1, 1, 0] }, { duration: 6, repeat: Infinity })
    };

    useEffect(() => {
        sequenceAni()
    }, [])

    return (
        <>
            <div className='flex relative cursor-pointer' ref={scope} >
                {/* For big screen */}
                <motion.div className='w-52 absolute left-[-10rem] top-[-2rem] hidden sm:block' id='target1' style={{ zIndex: index1 }}>
                    <img src={social0} alt="" className='w-full h-full object-cover' />
                </motion.div>
                <motion.div className='w-52 absolute left-[-7rem] top-[-5rem] hidden sm:block' id='target2' style={{ zIndex: index2 }}>
                    <img src={social1} alt="" className='w-full h-full object-cover' />
                </motion.div>
                <motion.div className='w-52 absolute left-[-4rem] top-[-8rem] hidden sm:block' id='target3' style={{ zIndex: index3 }}>
                    <img src={social2} alt="" className='w-full h-full object-cover' />
                </motion.div>
                <motion.div className='w-52 absolute left-[-1rem] top-[-11rem] hidden sm:block' id='target4' style={{ zIndex: index4 }}>
                    <img src={social3} alt="" className='w-full h-full object-cover' />
                </motion.div>
                <motion.div className='w-52 absolute left-[2rem] top-[-14rem] hidden sm:block' id='target5' style={{ zIndex: index5 }}>
                    <img src={social4} alt="" className='w-full h-full object-cover' />
                </motion.div>

                {/* For small screen */}

                <motion.div className='w-28 sm:hidden absolute left-[-7rem] top-[-2rem]' id='target6' style={{ zIndex: index1 }}>
                    <img src={social0} alt="" className='w-full h-full object-cover' />
                </motion.div>
                <motion.div className='w-28 sm:hidden absolute left-[-5rem] top-[-4rem]' id='target7' style={{ zIndex: index2 }}>
                    <img src={social1} alt="" className='w-full h-full object-cover' />
                </motion.div>
                <motion.div className='w-28 sm:hidden absolute left-[-3rem] top-[-6rem]' id='target8' style={{ zIndex: index3 }}>
                    <img src={social2} alt="" className='w-full h-full object-cover' />
                </motion.div>
                <motion.div className='w-28 sm:hidden absolute left-[-1rem] top-[-8rem]' id='target9' style={{ zIndex: index4 }}>
                    <img src={social3} alt="" className='w-full h-full object-cover' />
                </motion.div>
                <motion.div className='w-28 sm:hidden absolute left-[1rem] top-[-10rem]' id='target10' style={{ zIndex: index5 }}>
                    <img src={social4} alt="" className='w-full h-full object-cover' />
                </motion.div>
            </div>
        </>
    )
}

export default CardAnimation