import React from 'react'
import LinkedBtn from './LinkedBtn'
import SecondPagePara from './SecondPagePara.jsx'
import SecondPageHeading from './secondPageHeading'

const SecondPage = () => {
    return (
        <div className='bg-secondPageBgClr'>
            <div className='min-h-svh sm:mx-[60px] 2xl:mx-auto lg:max-w-[1536px] px-8 lg:grid lg:grid-cols-2'>

                <div className='order-2 pt-16 pb-10 lg:flex lg:flex-col justify-center'>
                    <SecondPageHeading text={"Create and customize your Linktree in minutes"} clr={"text-secondPageTextClr"}/>
                    <SecondPagePara text={"Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert."} clr={"text-secondPageTextClr"}/>
                    <LinkedBtn text={"Get started for free"} bgClr={"bg-secondPageTextClr"} textClr={"text-white"} />
                </div>

                <div className=' order-1 h-screen'>
                <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='589'%20width='393'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" alt="" />
                </div>

            </div>
        </div>
    )
}

export default SecondPage