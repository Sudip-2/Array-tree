import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import SigninBtn from './SigninBtn'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";
import NavHeading from './NavHeading';
import Bigheading from './Bigheading';
import Fullwidthcontbtn from './Fullwidthcontbtn'
import Accountornot from './Accountornot';
import loginPic from '../../../public/login.png'
import EmailornameInput from './EmailornameInput';
import PasswordInput from './PasswordInput';

const Login = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  useEffect(() => {
    document.title = "Log in or Sign Up | Arraytree"
  },[])


  return (
    <>
      <div className='min-h-svh lg:flex bg-white pb-[70px] lg:pb-0'>

        {/* Login part */}
        <div className='lg:w-1/2'>

          <div className='pt-[40px]'>

            {/* Logolink part */}
            <div className='mx-[30px] sm:mx-[50px]'>
            <NavHeading />
            </div>

            {/* form part */}
            <div className='flex flex-col items-center mt-[100px] mx-[30px] sm:mx-[80px]'>

              <Bigheading text1="Welcome back!" text2="Log in to your Linktree"/>

              <form className='flex flex-col w-full gap-3 mt-[45px]' onSubmit={handleSubmit(onSubmit)}>

                <div className='relative'>
                  <EmailornameInput register={register} errors={errors} />
                </div>

                {/* Password box only after email or name if present */}
                <div className='relative'>
                  <PasswordInput register={register} errors={errors} />
                </div>
                {/* Password box only after email or name if present */}

                <Fullwidthcontbtn />
              </form>

              <div className='flex flex-col items-center w-full gap-3 mt-[35px]'>
                <p className='text-navLinkGreys'>OR</p>
                <SigninBtn text={"Continue with Google"} icon={<FcGoogle />} />
                <SigninBtn text={"Continue with Apple"} icon={<FaApple />} />
              </div>

              <div className='flex items-center gap-1 mt-[35px]'>
                <Link className='text-loginBtnClr underline'>Forgotpassword?</Link>
                <span className='text-xs'>&#9679;</span>
                <Link className='text-loginBtnClr underline'>Forgot username?</Link>
              </div>

              <Accountornot text1="Don't have an account? " text2="Sign up" to="/register/undefined"/>

            </div>

          </div>

        </div>

        {/* Image */}
        <img src={loginPic} alt="" className='hidden lg:block w-1/2' />

      </div>
    </>
  )
}

export default Login