import React, { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'

const SecondPAniFirst = ({ rotateX,
  rotateY }) => {

  const [scope, animate] = useAnimate();
  let img1 = "https://edge.website.production.linktr.ee/static/643f85ef2793dc16ebaea014fd452ad6/bc80e/CreateBook.webp"
  let img2 = "https://edge.website.production.linktr.ee/static/0cabaf49ec70921e31c45ca9e88f2ef9/7e3cb/CreateCover.webp"
  let img3 = "https://edge.website.production.linktr.ee/static/8ea4b70b3505792df8a09eec7cb77ba8/bbc48/CreateSilhouette.webp"
  let img4 = "https://edge.website.production.linktr.ee/static/1c208dba1335229b4c960b7b1e4c71e9/c23fa/CreatePerson.png"
  let img5 = "https://edge.website.production.linktr.ee/static/131212bd35ee82ffaebc52bea6125d15/9f16c/CreateShirt.png"
  let img6 = "https://edge.website.production.linktr.ee/static/d02faea02f7fc2e2ba31f7d3620889fc/bc09e/CreateTwitter.png"

  const sequenceAni = async () => {
    animate("#target1", { borderRadius: '0', width: "208px", height: "300px", y: 0, x: 0 },{duration:0.35});
    await animate("#target2", { borderRadius: '0', transform: "translateZ(75px)", width: "208px", height: "300px", y: 0 ,x: 0},{duration:0.35});
    animate("#target3", {
      opacity: 1, x: [0, 20, 0],y: [0, -10, 0],z: [50, 50, 50]
    },{duration: 0.6});
    animate("#target4", {
      opacity: 1, x: [0, -20, 0],y: [0, 10, 0],z: [35, 35, 35],
    },{duration: 0.6});
    animate("#target5", { opacity: 1, x: [0, -20, 0],y: [0, -10, 0],z: [-35, -35, -35] },{duration: 0.6});
    animate("#target6", { opacity: 1, x: [0, 20, 0],y: [0, -10, 0],z: [-35, -35, -35] },{duration: 0.6});
  };

  useEffect(() => {
    sequenceAni();
  }, []);

  return (
    <>
      <motion.div className='relative w-52 cursor-pointer mb-[300px]' ref={scope}
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY
        }}
      >

        {/* yellow bg */}
        <motion.div className='absolute w-52 overflow-hidden'
          initial={{
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            y: 125,
            x: -25,
          }}
          exit={{
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            y: 0,
            x: 0,
            opacity: 0,
          transform: "translateZ(75px)"
          }}
          id='target1'
          key="target1"
          >
          <img src={img3} alt="" className='w-full object-cover' />
        </motion.div>

        {/* Main guy */}
        <motion.div className='absolute w-52 overflow-hidden'
          initial={{
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            y: 125,
            x: -25,
          }}
          exit={{
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            y: 0,
            x: 0,
            opacity: 0,
          }}
          id='target2'
          key="target2"
        >
          <img src={img4} alt="img1" className='w-full object-cover' />
        </motion.div>

        {/* Shirt */}
        <motion.div className='absolute w-28 left-[155px] top-24'
          initial={{
            opacity: 0,
          }}
          exit={{
            opacity:0
          }}
          id='target3'
        >
          <img src={img5} alt="img1" className='w-full object-cover' />
        </motion.div>

        {/* Twitter */}
        <motion.div className='absolute w-20 right-[185px] top-44'
          initial={{
            opacity: 0,
          }}
          exit={{
            opacity:0
          }}
          id='target4'
        >
          <img src={img6} alt="img1" className='w-full object-cover' />
        </motion.div>

        {/* Book */}
        <motion.div className='absolute w-20 right-[185px] top-5'
          initial={{
            opacity: 0,
          }}
          exit={{
            opacity:0
          }}
          id='target5'
        >
          <img src={img1} alt="img1" className='w-full object-cover' />
        </motion.div>

        {/* Cover */}
        <motion.div className='absolute w-24 left-[155px] top-[-30px]'
          initial={{
            opacity: 0,
          }}
          exit={{
            opacity:0
          }}
          id='target6'
        >
          <img src={img2} alt="img1" className='w-full object-cover' />
        </motion.div>

      </motion.div>
    </>
  )
}

export default SecondPAniFirst