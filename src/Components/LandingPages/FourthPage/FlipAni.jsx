import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const FlipAni = ({myArray,time}) => {
    let [index, setIndex] = useState(0)
    let [flipped, setFlipped] = useState(0)

    let changeImg = () => {
        setIndex((prev) => (prev + 1) % myArray.length)
        setFlipped((prev) => (prev + 180))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            changeImg();
        }, time);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <motion.div className='cursor-pointer'
                onClick={changeImg}
                animate={{
                    rotateY: flipped,
                    scaleX: index === 1 ? -1 : 1
                }}
                transition={{
                    duration: 0.5
                }}
            >
                <img src={myArray[index]} alt="" />
            </motion.div>
        </>
    )
}

export default FlipAni