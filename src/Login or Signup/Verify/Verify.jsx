import React from 'react'
import { useForm } from "react-hook-form";
import NavHeading from '../Login/NavHeading.jsx'
import Violetunderline from '../Login/Violetunderline.jsx'
import Bigheading from '../Login/Bigheading.jsx'
import Fullwidthcontbtn from '../Login/Fullwidthcontbtn.jsx';
import VioletText from './VioletText.jsx';
import { Link,useNavigate } from 'react-router-dom';

const Verify = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const navigate = useNavigate()

  const onSubmit = data => {
    navigate('/register/select-categories')
  };

  return (
    <div className='h-svh bg-white pt-[30px] px-3 sm:px-0'>

      <div className='max-w-[520px] mx-auto'>

        <div className='flex items-center justify-between'>
          <NavHeading />
          <Violetunderline to={'/'} text={"Verify Later"} />
        </div>

        <div className='mt-[60px] leading-[50px]'>
          <Bigheading text1="Enter your code" text2="We sent a temporary sign up code to example@gmail.com." />
        </div>

        <form className='relative mt-[20px]' onSubmit={handleSubmit(onSubmit)}>
          <input type="text" id='verifyCode' className={`bg-navHoverGrey w-full py-[15px] rounded-lg px-[20px] peer`} {...register("verifyCode")} required />
          {errors.EmailorName && <span className='text-red-500 ml-2 text-sm'>Enter Valid Code</span>}
          <label htmlFor='verifyCode' className={`absolute left-[20px] top-[15px] text-navLinkGrey peer-focus:top-[2px] peer-focus:text-xs duration-200 peer-valid:text-xs peer-valid:top-[2px]`}>Enter code</label>

          <div className='mt-[20px]'>
            <Fullwidthcontbtn />
          </div>
        </form>

        <Link className='text-lg font-semibold text-center block mt-6'>
          <VioletText text={"Resend code"}/>
        </Link>

      </div>

    </div>
  )
}

export default Verify