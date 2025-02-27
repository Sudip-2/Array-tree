import React, { useState } from 'react'
import SvgPotrait from '../../Assets/SvgPotrait.svg'
import SvgFlower from '../../Assets/SvgFlower.svg'
import { Link } from 'react-router-dom'
import FooterHandL from './FooterHandL'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {

    let [name, setName] = useState(undefined)
    let FooterLinks = [
        { text: "Engineering Blog", link: "#" },
        { text: "Marketplace", link: "#" },
        { text: "What's New", link: "#" },
        { text: "About", link: "#" },
        { text: "Press", link: "#" },
        { text: "Careers", link: "#" },
        { text: "Link in Bio", link: "#" },
        { text: "Social Good", link: "#" },
        { text: "Contact", link: "#" }
    ];
    let FooterLinks2 = [
        { text: "Linktree for Enterprise", link: "#" },
        { text: "2023 Creator Report", link: "#" },
        { text: "2022 Creator Report", link: "#" },
        { text: "Charities", link: "#" },
        { text: "What's Trending", link: "#" },
        { text: "Creator Profile Directory", link: "#" },
        { text: "Explore Templates", link: "#" }
    ];
    let SupportTopics = [
        { text: "Help Topics", link: "#" },
        { text: "Getting Started", link: "#" },
        { text: "Linktree Pro", link: "#" },
        { text: "Features & How-Tos", link: "#" },
        { text: "FAQs", link: "#" },
        { text: "Report a Violation", link: "#" }
    ];
    let TrustLegal = [
        { text: "Terms & Conditions", link: "#" },
        { text: "Privacy Notice", link: "#" },
        { text: "Cookie Notice", link: "#" },
        { text: "Trust Center", link: "#" },
        { text: "Cookie Preferences", link: "#" }
    ];


    return (
        <>
            <div className='bg-secondPageTextClr relative overflow-x-hidden z-[5] pb-24'>
                <div className='min-h-svh 2xl:mx-auto lg:max-w-[1536px] px-8 relative '>

                    {/* Input redirect part */}
                    <div className='text-secondPageBgClr text-2xl font-bold text-center '>
                        <h3 className='mt-40'>Jumpstart your corner of the internet today</h3>
                    </div>

                    <div className='flex items-center justify-center gap-2 flex-wrap mt-5'>
                        <div className='relative'>
                            <span className='absolute text-navLinkGrey top-[17px] left-[9px] text-[1.04rem]'>arraytr.ee/</span>
                            <input type="text" className='h-[20px] py-[30px] rounded-lg pl-[86px] pr-[10px] w-[240px] text-navLinkGrey' placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <Link to={`/register/${name}`}><button className='px-[25px] mb-3 py-[20px] bg-claimBtn font-semibold rounded-full mt-[10px] sm:mt-0'>Claim your Arraytree</button></Link>
                    </div>
                    {/* Input redirect part */}

                    {/* White main footer */}
                    <div className='bg-white rounded-2xl px-4 mt-14 pb-16 md:px-16'>

                        {/* Heading and Links part */}
                        <div className='py-14 md:grid md:grid-cols-4 gap-4'>
                            <FooterHandL text='Company' arr={FooterLinks} />
                            <FooterHandL text='Community' arr={FooterLinks2} />
                            <FooterHandL text='Support' arr={SupportTopics} />
                            <FooterHandL text='Trust&Legal' arr={TrustLegal} />
                        </div>
                        {/* Heading and Links part */}

                        {/* Login and Get started Btn */}
                        <div className='md:flex gap-4 items-center'>
                        <div>
                            <Link to={`/login`} >
                                <button className='bg-navHoverGrey hover:bg-gray-200 rounded-xl px-[20px] lg:px-[25px] py-[15px] lg:py-[20px] ${bgClr} ${textClr} font-semibold rounded-full mr-2 mb-2'>Log in</button>
                            </Link>
                                <Link to={`/register/${name}`}><button className={`px-[20px] lg:px-[25px] py-[15px] lg:py-[20px] font-semibold rounded-full bg-FooterBtnClr`}>Get started for free</button></Link>
                        </div>
                        {/* Login and Get started Btn */}

                        {/* Links */}
                        <div className=' flex items-center gap-4 mt-6 md:mt-0 lg:ml-auto'>
                            <div className='text-5xl flex gap-2'>
                                <a href="https://www.linkedin.com/in/sudip-paul18/" target='_blank' className='hover:scale-[0.9] duration-200'><FaLinkedin />
                                </a>
                                <a href="https://github.com/Sudip-2" target='_blank' className='hover:scale-[0.9] duration-200'><FaGithub />
                                </a>
                            </div>
                            <p>Sudip's Socials</p>
                        </div>
                        <div className=' flex items-center gap-4 mt-4 md:mt-0'>
                            <div className='text-5xl flex gap-2'>
                                <a href="https://github.com/PRITAMSLEARNINGACCOUNT" target='_blank' className='hover:scale-[0.9] duration-200'><FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/pritamstech/" target='_blank' className='hover:scale-[0.9] duration-200'><FaLinkedin />
                                </a>
                            </div>
                            <p>Pritam's Socials</p>
                        </div>
                        </div>
                        {/* Links */}

                    </div>

                    {/* website name */}

                    <div className='bg-secondPageBgClr w-full mt-6 text-center py-20 rounded-[4rem]'>
                        <h3 className='text-secondPageTextClr font-headingFont text-5xl font-bold'>Arraytree</h3>
                    </div>

                </div>
                {/* Background pics */}
                <div className='absolute top-[20%] left-[-6%] h-[60%] z-[-1]'>
                    <img src={SvgPotrait} alt="svg potrait" className='w-full h-full object-cover' />
                </div>
                <div className='absolute top-[30%] right-[-25%]  h-1/3 z-[-1]'>
                    <img src={SvgFlower} alt="svg potrait" className='w-full h-full object-cover' />
                </div>
            </div>
        </>
    )
}

export default Footer