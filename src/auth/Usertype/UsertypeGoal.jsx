import React, { useState } from 'react'
import MainHeading from '../../Components/AuthComponents/MainHeading'
import Categories from '../../Components/AuthComponents/Categories'
import creatorPic from '../../Assets/creatorCTG.svg'
import BusinessPic from '../../Assets/businessCTG.svg'
import PersonalPic from '../../Assets/personalCTG.svg'
import Fullwidthcontbtn from '../../Components/AuthComponents/Fullwidthcontbtn'
import { useForm } from "react-hook-form";

const UsertypeGoal = () => {

  const [progress, setProgress] = useState(0)

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
      <div className='bg-white h-full min-h-svh pt-6 px-4'>

        {/* Outer progress bar container */}
        <div className="w-[120px] bg-gray-200 rounded-full h-1 overflow-hidden mx-auto">
          {/* Inner progress bar (dynamic width) */}
          <div
            className="bg-loginBtnClr h-1 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {/* outline outline-black */}
        <form className='max-w-[512px] mx-auto pb-8 relative'
          onSubmit={handleSubmit(onSubmit)}
        >

          <div className='px-3 mt-16'>
            <MainHeading text1={"Which best describes your goal for using Arraytree?"} text2={"This helps us personalize your experience."} />
          </div>

          {/* Categories box*/}
          <div>
            {/* Categories */}
            <Categories textH={"Creator"} textP={"Build my following and explore ways to monetize my audience"} img={creatorPic} bgCLr={"Yellow"} val={"Creator"} register={register}/>
            <Categories textH={"Business"} textP={"Grow my business and reach more customers."} img={BusinessPic} bgCLr={"#9400D3"} val={"Business"} register={register}/>
            <Categories textH={"Personal"} textP={"Build my following and explore ways to monetize my audience"} img={PersonalPic} bgCLr={"red"} val={"Personal"} register={register}/>
          </div>

          <div className='sticky bottom-8'>
            <Fullwidthcontbtn />
          </div>

        </form>

      </div>
    </>
  )
}

export default UsertypeGoal