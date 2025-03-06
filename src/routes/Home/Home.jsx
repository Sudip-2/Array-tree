import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimate, useMotionValue, useSpring, useTransform } from "framer-motion";
import Phone from './Phone.jsx';
import Phone2 from './Phone2.jsx';
import SecondPage from '../../Components/LandingPages/SecondPage/SecondPage';
import ThirdPage from '../../Components/LandingPages/ThirdPage/ThirdPage.jsx';
import Qna from '../../Components/LandingPages/QNA/Qna.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import FourthPage from '../../Components/LandingPages/FourthPage/FourthPage.jsx';

const Home = () => {

  const [scope, animate] = useAnimate();
  let [name, setName] = useState(undefined)
  let [skew, setSkew] = useState(-6)
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
    setSkew(0)
  }


  const sequenceAni = async () => {
    while (true) {
      await animate("#target1", { scale: [1] }, { delay: 3 });
      await animate("#target1", { rotateY: [80] });
      await animate("#target1", { scale: [0] });
      await animate("#target2", { scale: [1], rotateY: [80, 360], opacity: 1 }, { duration: 1 });
  
      await new Promise(resolve => setTimeout(resolve, 3000));
  
      await animate("#target2", { rotateY: [440] });
      await animate("#target2", { scale: [0] });
      await animate("#target1", { scale: [1], rotateY: [440, 720], opacity: 1 }, { duration: 1 });
    }
  };
  

  useEffect(() => {
    sequenceAni();
  }, []);

  return (

    <>
      <div className='min-h-svh bg-landingBg sm:mx-[60px] lg:flex pt-[80px] sm:pt-[168px] xl:pt-44 2xl:mx-auto lg:max-w-[1500px] mx-8 pb-24'
        onMouseMove={handleMouseMove}
      >


        {/* Div 1 */}
        <div className='lg:w-1/2'>

          {/* heading */}
          <div className='text-headingTextClr font-headingFont text-[2.6rem] sm:text-[2.9rem] leading-[47px] font-black 2xl:text-[4.7rem] 2xl:leading-[82px]'>
            <h1>Everything you are. In one, simple link in bio.</h1>
          </div>
          {/* desc */}
          <p
            className='text-headingTextClr mt-[15px] sm:mt-[25px] font-headingFont font-medium sm:leading-[25px] xl:text-xl'
          >Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          {/* Buttons */}
          <div className='sm:flex gap-3 mt-[25px] sm:mt-[40px]'>

            <div className='relative'>
              <span className='absolute text-navLinkGrey top-[17px] left-[9px] text-[1.04rem]'>arraytr.ee/</span>
              <input type="text" className='h-[20px] py-[30px] rounded-lg pl-[86px] pr-[10px] w-[240px] text-navLinkGrey' placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
            </div>

            <Link to={`/register/${name}`}><button className='px-[20px] py-[15px] bg-claimBtn font-semibold rounded-full mt-[10px] sm:mt-0'>Claim your Arraytree</button></Link>
          </div>

        </div>

        {/* Div 2 */}
        <div className='lg:w-1/2 mt-20 lg:mt-[-1rem] min-h-[360px] sm:min-h-[500px] relative' ref={scope}>

          {/* Background picture */}
          <motion.div id='target1' className='absolute inset-0 lg:mt-[-100px] 2xl:mt-[0px]'>
            <Phone rotateX={rotateX} rotateY={rotateY} skew={skew} />
          </motion.div>

          <motion.div id='target2' className='opacity-0 lg:mt-[-100px] 2xl:mt-[0px] absolute inset-0'>
            <Phone2 rotateX={rotateX} rotateY={rotateY} skew={skew} />
          </motion.div>

        </div>

      </div>
      <SecondPage />
      <ThirdPage />
      <FourthPage/>
      <Qna />
      <Footer />
    </>

  )
}

export default Home