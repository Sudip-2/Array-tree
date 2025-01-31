import React, { useState } from 'react'
import MainHeading from '../Components/AuthComponents/MainHeading'
import Profilepic from '../Components/UserComponents/Profilepic';
import SubHeading from '../Components/UserComponents/SubHeading';
import Backgroundpic from '../Components/UserComponents/Backgroundpic';
import Continue from '../Components/AuthComponents/Fullwidthcontbtn'
import { FaYoutube } from "react-icons/fa";
import AddLinks from '../Components/UserComponents/AddLinks';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import AddBtnForLinks from '../Components/UserComponents/AddBtnForLinks';
import { PiLinkSimpleBold } from "react-icons/pi";

const Profile = () => {
  const [wordLimit, setWordLimit] = useState(80)
  const [show,setShow] = useState(false)
  const handleOnlinkClick = () => {
    setShow(!show)
  }

  return (
    <>
      <div className='min-h-svh bg-white pt-10 px-4 pb-28'>
        <MainHeading text1={"Add profile details"} />
        <form className='mt-8 flex items-center flex-col'>

          {/* Profile pic */}
          <SubHeading text={"Select a Profile image"} />
          <Profilepic />

          {/* Title and Bio */}
          <div className='mt-8 flex flex-col items-center gap-4'>

            <SubHeading text={"Add title and bio"} />
            <input type="text" placeholder='Enter your name' className='bg-navHoverGrey w-[320px] h-[50px] px-5 rounded-xl' required />

            <div className='relative'>
              <textarea name="Bio" id="userBio" rows={4} maxLength={80} className='bg-navHoverGrey w-[320px] rounded-xl p-5' placeholder='Add your bio'
                onChange={(e) => {
                  setWordLimit(e.target.value.length)
                }}
              >
              </textarea>
              <span className='absolute bottom-3 right-4 text-gray-400'>{wordLimit}/80</span>
            </div>

            <div className='mt-6 flex flex-col items-center gap-6'>
              <SubHeading text={"Select a Background Image/template"} />

              <Backgroundpic />

            </div>

          </div>

          {/* Links */}
          <div className='mt-6 text-center'>

            <SubHeading text={"Add Links to your Arraytree"} />

            <div className='mt-4 '>

              <div className='grid grid-cols-4 gap-8'>

                <AddBtnForLinks icon={<FaLinkedin />} color={"text-blue-500"} addlink={handleOnlinkClick}/>
                <AddBtnForLinks icon={<FaGithub />} color={""} addlink={handleOnlinkClick}/>
                <AddBtnForLinks icon={<FaYoutube />} color={"text-red-500"} addlink={handleOnlinkClick}/>
                <AddBtnForLinks icon={<FaSquareXTwitter />} color={""} addlink={handleOnlinkClick}/>
                <AddBtnForLinks icon={<PiLinkSimpleBold />} color={""} addlink={handleOnlinkClick}/>

              </div>

              <div className='mt-8'>
                <div className={`mt-2 ${show?"block":"hidden"}`}>
                  <AddLinks icon={<FaYoutube />} color={'text-red-500'} linkName={"Youtube"} />
                </div>
              </div>

            </div>

          </div>

          <div className='fixed bottom-8 w-1/3 left-[33%]'>
            <Continue />
          </div>
        </form>
      </div>
    </>
  )
}

export default Profile