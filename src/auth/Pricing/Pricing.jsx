import React from 'react'
import NavHeading from '../../Components/AuthComponents/NavHeading'
import MainHeading from '../../Components/AuthComponents/MainHeading'
import Pricingbox from '../../Components/AuthComponents/Pricingbox'
import Continue from '../../Components/AuthComponents/Fullwidthcontbtn'
import { useForm } from "react-hook-form";

const Pricing = () => {
    // Need to add swiper js for mobile
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <>
            <div className='min-h-screen bg-white pt-10 px-10 pb-28'>

                <div className=''>
                    <NavHeading />
                </div>

                <div className=' flex justify-start sm:justify-center mt-4'>
                    <MainHeading text1={"Find the plan for you"} text2={"You can change at any time."} />
                </div>

                {/* Pricing box container */}
                <form className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16' onSubmit={handleSubmit(onSubmit)}>

                    {/* Pricing box */}
                    <Pricingbox text={"Free"} subText={"For your personal Linktree"} amt={"$0"} amtText={"Free, Forever"} feature={"Key features:"} linkName={["Unlimited Links"]} register={register} val={"Free"} />

                    <Pricingbox text={"Starter"} subText={"For growing influencers"} amt={"Rs.150"} amtText={"annually, or Rs.250 monthly"} feature={"Everything in Free, plus:"} linkName={["Upgraded style options", "Monetization support affiliate marketing tools", "Scheduling", "Audience insights"]} register={register} val={"Starter"} />

                    <Pricingbox text={"Pro"} subText={"For creators and businesses"} amt={"Free for 30 days"} amtText={"then Rs.300/mo annually, or Rs.450 monthly"} feature={"Everything in Starter, plus:"} linkName={["Advanced customization of buttons, themes, and fonts", "Click, conversion, and revenue tracking", "Upgraded customer support", "Option to hide Linktree logo", "Social platform integrations to automatically display your latest content", "Multiple admins"]} bgClr={"bg-purple-900"} hover={"Try Pro for Free"} register={register} val={"Pro"} />

                    <Pricingbox text={"Premium"} subText={"For brands and businesses"} amt={"Rs.900"} amtText={"annually, or Rs.1,000 monthly"} feature={"Everything in Pro, plus:"} linkName={["Dedicated customer success manager with 1-1 onboarding", "Analytics: Export lifetime data", "Access to exclusive webinars & best practice videos", "Premium support, response time 4 hours"]} register={register} val={"Premium"} />

                    <div className='fixed bottom-8 w-1/2 left-[26%]'>
                        <Continue />
                    </div>
                </form>

            </div>
        </>
    )
}

export default Pricing