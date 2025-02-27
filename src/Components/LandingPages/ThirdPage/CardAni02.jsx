import { motion, useAnimate } from 'motion/react'
import React, { useEffect, useState } from 'react'
import BackCoverSmallAni from './BackCoverSmallAni';

const CardAni02 = ({ok}) => {
    const cMedium = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/medium.jpg"
    const cMusic = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/music.jpg"
    const cTwitter = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/twitter.jpg"
    const cVideo = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/videocover.png"
    const cCover = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/cover.jpg"

    const [scope, animate] = useAnimate();
    let [stateOk, setOk] = useState(ok);

    const sequenceAni = () => {
        animate("#backCoverAni", { x: [0, -65], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animate("#backCoverAni", { x: [-65, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animate("#InstaAnim", { x: [0, -48], y: [0, 25], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animate("#InstaAnim", { x: [-48, 0], y: [25, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animate("#chairAnim", { x: [0, 36], y: [0, 35], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animate("#chairAnim", { x: [36, 0], y: [35, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animate("#cMediumAnim", { y: [0, -64], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animate("#cMediumAnim", { y: [-64, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animate("#CvideoAnim", { x: [0, 60], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animate("#CvideoAnim", { x: [60, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animate("#TwitterAnim", { y: [0, 50], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animate("#TwitterAnim", { y: [50, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        // For Big screen
        animate("#backCoverAniB", { x: [0, -130], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animate("#backCoverAniB", { x: [-130, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animate("#cMediumAnimB", { y: [0, -85], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animate("#cMediumAnimB", { y: [-85, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animate("#CvideoAnimB", { x: [0, 100], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animate("#CvideoAnimB", { x: [100, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animate("#chairAnimB", { x: [0, 75], y: [0, 60], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animate("#chairAnimB", { x: [75, 0], y: [60, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animate("#InstaAnimB", { x: [0, -75], y: [0, 45], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animate("#InstaAnimB", { x: [-75, 0], y: [35, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animate("#TwitterAnimB", { y: [0, 75], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animate("#TwitterAnimB", { y: [75, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);
    };

    useEffect(() => {
        if (stateOk) {
            sequenceAni();
        }
    }, [stateOk]); 

    return (
        <div className='flex relative cursor-pointer' ref={scope}>

            {/* For small screen */}
            <motion.div className='absolute left-[-6rem] bottom-[-0.5rem] sm:hidden' id='backCoverAni'>
                <BackCoverSmallAni />
            </motion.div>

            <motion.div className='absolute w-24  sm:hidden' id='chairAnim'>
                <img src={cCover} alt="cover" className='w-full h-full object-cover rounded-xl' />
            </motion.div>

            <motion.div className='absolute w-28 bottom-0 left-[-3.3rem] sm:hidden' id='cMediumAnim'>
                <img src={cMedium} alt="medium" className='w-full h-full object-cover rounded-xl' />
            </motion.div>

            <motion.div className='absolute w-24 left-[-6rem] top-[-0.2rem] sm:hidden' id='InstaAnim'>
                <img src={cMusic} alt="music" className='w-full h-full object-cover rounded-xl' />
            </motion.div>

            <motion.div className='absolute w-[4.5rem] left-[-2.6rem] sm:hidden' id='TwitterAnim'>
                <img src={cTwitter} alt="twitter" className='w-full h-full object-cover rounded-xl' />
            </motion.div>

            <motion.div className='absolute w-28 top-[-3.5rem] sm:hidden' id='CvideoAnim'>
                <img src={cVideo} alt="video" className='w-full h-full object-cover rounded-xl' />
            </motion.div>

            {/* For Big screen */}
            <motion.div className='absolute left-[-6rem] bottom-[0rem] w-32 hidden sm:block' id='backCoverAniB'>
                <BackCoverSmallAni />
            </motion.div>

            <motion.div className='absolute w-28 hidden sm:block' id='chairAnimB'>
                <img src={cCover} alt="cover" className='w-full h-full object-cover rounded-xl' />
            </motion.div>

            <motion.div className='absolute w-48 bottom-0 left-[-5rem] hidden sm:block' id='cMediumAnimB'>
                <img src={cMedium} alt="medium" className='w-full h-full object-cover rounded-xl' />
            </motion.div>

            <motion.div className='absolute w-32 left-[-6rem] top-[-0.2rem]' id='InstaAnimB'>
                <img src={cMusic} alt="music" className='w-full h-full object-cover rounded-xl' />
            </motion.div>

            <motion.div className='absolute w-24 left-[-2rem]' id='TwitterAnimB'>
                <img src={cTwitter} alt="twitter" className='w-full h-full object-cover rounded-xl' />
            </motion.div>

            <motion.div className='absolute w-40 top-[-4.2rem] hidden sm:block' id='CvideoAnimB'>
                <img src={cVideo} alt="video" className='w-full h-full object-cover rounded-xl' />
            </motion.div>

        </div>
    );
};

export default CardAni02;
