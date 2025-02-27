import React, { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import SecondPageHeading from "../SecondPage/secondPageHeading";
import SecondPagePara from "../SecondPage/secondPagePara";
import LinkedBtn from "../SecondPage/LinkedBtn";
import CardAnimation from "./CardAnimation";
import BackCoverSmallAni from "./BackCoverSmallAni";

const ThirdPage = () => {

    const cMedium = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/medium.jpg"
    const cMusic = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/music.jpg"
    const cTwitter = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/twitter.jpg"
    const cVideo = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/videocover.png"
    const cCover = "https://api.blog.production.linktr.ee/wp-content/themes/blog-theme/static-assets/Caterpiller/cover.jpg"

    const [miniscope, animateM] = useAnimate();

    const sequenceAniTwo = () => {
        animateM("#backCoverAni", { x: [0, -65], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animateM("#backCoverAni", { x: [-65, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animateM("#InstaAnim", { x: [0, -48], y: [0, 25], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animateM("#InstaAnim", { x: [-48, 0], y: [25, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animateM("#chairAnim", { x: [0, 36], y: [0, 35], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animateM("#chairAnim", { x: [36, 0], y: [35, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animateM("#cMediumAnim", { y: [0, -64], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animateM("#cMediumAnim", { y: [-64, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animateM("#CvideoAnim", { x: [0, 60], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animateM("#CvideoAnim", { x: [60, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animateM("#TwitterAnim", { y: [0, 50], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animateM("#TwitterAnim", { y: [50, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        // For Big screen
        animateM("#backCoverAniB", { x: [0, -130], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animateM("#backCoverAniB", { x: [-130, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animateM("#cMediumAnimB", { y: [0, -85], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animateM("#cMediumAnimB", { y: [-85, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animateM("#CvideoAnimB", { x: [0, 100], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animateM("#CvideoAnimB", { x: [100, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animateM("#chairAnimB", { x: [0, 75], y: [0, 60], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animateM("#chairAnimB", { x: [75, 0], y: [60, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animateM("#InstaAnimB", { x: [0, -75], y: [0, 45], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animateM("#InstaAnimB", { x: [-75, 0], y: [35, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);

        animateM("#TwitterAnimB", { y: [0, 75], opacity: [1] }, { duration: 1 });
        setTimeout(() => {
            animateM("#TwitterAnimB", { y: [75, 0], opacity: [1, 0] }, { duration: 1 });
        }, 2000);
    };

    const [scope, animate] = useAnimate();

    const sequenceAni = async () => {
        while (true) {
            await animate("#cardAnim", { opacity: 1 });
            await animate("#BtnMainB", { x: 125, y: -85 }, { duration: 0.5, delay: 3 });
            if (window.innerWidth < 640) {
                await animate("#BtnMain", { x: 90, y: -45 }, { duration: 0.5, delay: 3 });
            }
            await animate("#cardAnim", { opacity: 0 });

            sequenceAniTwo();
            await animate("#card02Anim", { opacity: 1 });
            await animate("#card02Anim", { opacity: 0 }, { delay: 3 });

            await animate("#BtnMainB", { x: 0, y: 0 }, { duration: 0.5 });
            if (window.innerWidth < 640) {
                await animate("#BtnMain", { x: 0, y: 0 }, { duration: 0.5 });
            }
        }
    };


    useEffect(() => {
        sequenceAni();
    }, []);

    return (
        <div className="bg-ThirdPageBgClr">
            <div className="min-h-svh sm:mx-[60px] 2xl:mx-auto lg:max-w-[1536px] px-8 lg:grid lg:grid-cols-2">
                <div className="order-1 pt-16 pb-10 lg:flex lg:flex-col justify-center">
                    <SecondPageHeading
                        text={
                            "Share your Linktree from your Instagram, TikTok, Twitter and other bios"
                        }
                        clr={"text-ThirdPagetextClr"}
                    />
                    <SecondPagePara
                        text={
                            "Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online."
                        }
                        clr={"text-ThirdPagetextClr"}
                    />
                    <LinkedBtn
                        text={"Get started for free"}
                        bgClr={"bg-ThirdPagetextClr"}
                        textClr={"text-black"}
                    />
                </div>

                <motion.div className="order-2 h-screen flex items-center justify-center" ref={scope}>
                    <div className="relative border">

                        {/* Btn for small screen */}
                        <motion.div className="absolute z-10 bottom-[-3rem] left-[-9rem] block sm:hidden" id="BtnMain">
                            <button className="flex items-center bg-white py-2 sm:py-3 px-2 sm:w-32 rounded-full text-[0.5rem] sm:text-[0.65rem]">
                                <img src="logo.svg" alt="svg logo of array tree" className="w-[15px]" />
                                Arraytree/shopavery
                            </button>
                        </motion.div>

                        {/* Btn for big screen */}
                        <motion.div className="absolute z-10 bottom-[-7rem] left-[-13rem] hidden sm:block" id="BtnMainB">
                            <button className="flex items-center bg-white py-4 px-4 w-40 rounded-full text-xs font-semibold">
                                <img src="logo.svg" alt="svg logo of array tree" className="w-[15px]" />
                                Arraytree/shopavery
                            </button>
                        </motion.div>

                        <div className="opacity-0" id="cardAnim">
                            <CardAnimation />
                        </div>

                        <div className="opacity-0" id="card02Anim">
                            <div className='flex relative cursor-pointer' ref={miniscope}>

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

                                <motion.div className='absolute w-32 left-[-6rem] top-[-0.2rem] hidden sm:block' id='InstaAnimB'>
                                    <img src={cMusic} alt="music" className='w-full h-full object-cover rounded-xl' />
                                </motion.div>

                                <motion.div className='absolute w-24 left-[-2rem] hidden sm:block' id='TwitterAnimB'>
                                    <img src={cTwitter} alt="twitter" className='w-full h-full object-cover rounded-xl' />
                                </motion.div>

                                <motion.div className='absolute w-40 top-[-4.2rem] hidden sm:block' id='CvideoAnimB'>
                                    <img src={cVideo} alt="video" className='w-full h-full object-cover rounded-xl' />
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ThirdPage;