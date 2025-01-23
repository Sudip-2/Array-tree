import React, { useEffect, useState } from 'react'
import Right from '../../Assets/right.svg'

const Pricingbox = ({ text, subText, amt, amtText, feature, linkName, bgClr, hover, val, register }) => {

    let handleRadioCheck = e => {
        e.currentTarget.querySelector('input[type="radio"]').click()
    }

    return (
        <div className={`col-span-1 cursor-pointer rounded-3xl hover:outline-2 duration-100 outline outline-1 outline-gray-300`}
            onClick={(e) => { handleRadioCheck(e) }}>
            <div className={`flex justify-between outline outline-1 outline-gray-300 p-4 rounded-t-3xl items-center ${bgClr} ${bgClr ? "text-white" : "text-black"} relative`}>
                <div>
                    <h3 className={`text-2xl font-bold`}>{text}</h3>
                    <p className='font-semibold mt-2'>{subText}</p>
                    <span className={`absolute left-[38%] sm:left-[42%] lg:left-[33%] top-[-15px] bg-yellow-500 rounded-full ${hover ? "px-2 py-1" : "p-0"}`}>{hover}</span>
                </div>
                <div className={`h-6 w-6 rounded-lg flex justify-center items-center`}>
                    {/* <img src={Right} alt="right" className={`w-[80%] h-[80%] object-cover hidden`} /> */}
                    <input type="radio" value={val} {...register("choice", {
                        required: true
                    })} className="w-[80%] h-[80%] object-cover"
                    />
                </div>
            </div>

            <div className='p-4 pb-10'>
                <div>
                    <p className='font-bold text-2xl'>{amt}</p>
                    <p className='text-sm text-navLinkGrey'>{amtText}</p>
                </div>
                <div className='mt-5'>
                    <p>{feature}</p>
                    <div className='mt-4'>
                        {linkName.map((item, index) => {
                            return (
                                <div className='flex gap-2 mt-4' key={index}>
                                    <img src={Right} alt="right" />
                                    <p>{item}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pricingbox