import React, { useContext, useState } from 'react'
import Pricingcontext from '../../context/PricingContext'


const PricingCard = () => {

    const { billAmount } = useContext(Pricingcontext)
    const [annually, setAnnually] = useState(true)
    const annuallyFortyPercent = ((billAmount * 12) * 60) / 100

    return (
        <>
            <div className='border border-gray-300 w-[80%] rounded-2xl mx-auto'>

                <h2 className='p-6 border-b border-gray-300 font-bold text-2xl'>Your subscription</h2>

                <div className='mx-8 border-b border-gray-300 font-semibold'>
                    <p className='my-4'>Billing cycle</p>
                    <div className='flex items-center gap-4 my-4 relative'>
                        <div className='h-6 w-6 rounded-lg flex justify-center items-center'>
                            <input type="radio" name="billingType" value="" className='w-[80%] h-[80%] object-cover' defaultChecked={true}
                                onChange={() => setAnnually(!annually)}
                            />
                        </div>
                        <p className='text-sm'>Annually</p>
                        <span className='absolute right-0 text-sm bg-green-500 p-2 rounded-full'>Save 40% on Annual Plan</span>
                    </div>
                    <div className='flex items-center gap-4 my-4'>
                        <div className='h-6 w-6 rounded-lg flex justify-center items-center'>
                            <input type="radio" name="billingType" value="" className='w-[80%] h-[80%] object-cover'
                                onChange={() => setAnnually(!annually)}
                            />
                        </div>
                        <p className='text-sm'>Monthly</p>
                    </div>
                </div>

                <div className='flex justify-between mx-8 py-5 border-b border-gray-300'>
                    <p className='font-semibold'>Linktree Starter</p>

                    <div className={`${annually ? "block" : "hidden"}`}>
                        <p className='text-right'>Rs.{annuallyFortyPercent}<br /> INR per year</p>
                    </div>

                    <div className={`${annually ? "hidden" : "block"}`}>
                        <p className='text-right'>Rs.{(billAmount)}<br /> INR per month</p>
                    </div>

                </div>

                <div className='mx-8 flex justify-between my-5'>
                    <p className='font-medium'>Due today</p>
                    <div className={`${annually ? "block" : "hidden"}`}>
                        <p className='text-right'><span className='font-bold text-xl'>Rs.{annuallyFortyPercent} INR</span> <br /> per year</p>
                    </div>
                    <div className={`${annually ? "hidden" : "block"}`}>
                        <p className='text-right'><span className='font-bold text-xl'>Rs.{billAmount} INR</span> <br /> per month</p>
                    </div>
                </div>

                <div className='flex justify-center my-8'>
                    <button type='submit' className='w-[85%] bg-loginBtnClr py-[15px] rounded-full text-white font-bold hover:bg-purple-800'>Pay Rs.{annually ? annuallyFortyPercent : billAmount} INR now</button>
                </div>

            </div>
        </>
    )
}

export default PricingCard