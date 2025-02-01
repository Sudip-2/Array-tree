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
  const [ytshow, setYtshow] = useState(false)
  const [gitshow, setGitshow] = useState(false)
  const [linkedinshow, setLInkedinshow] = useState(false)
  const [Xshow, setXshow] = useState(false)
  const [personalLinkshow, setPersoLinkshow] = useState(false)

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

                <div onClick={() => setLInkedinshow(!linkedinshow)}>
                  <AddBtnForLinks icon={<FaLinkedin />} color={"text-blue-500"} />
                </div>
                <div onClick={() => setGitshow(!gitshow)}>
                  <AddBtnForLinks icon={<FaGithub />} color={""} />
                </div>
                <div onClick={() => setYtshow(!ytshow)}>
                  <AddBtnForLinks icon={<FaYoutube />} color={"text-red-500"} />
                </div>
                <div onClick={() => setXshow(!Xshow)}>
                  <AddBtnForLinks icon={<FaSquareXTwitter />} color={""} />
                </div>
                <div onClick={() => setPersoLinkshow(!personalLinkshow)}>
                  <AddBtnForLinks icon={<PiLinkSimpleBold />} color={""} />
                </div>

              </div>

              <div className='mt-8'>
                <div className={`mt-2 ${linkedinshow ? "block" : "hidden"}`}>
                  <AddLinks icon={<FaLinkedin />} color={'text-blue-500'} linkName={"LinkedIn"} />
                </div>
                <div className={`mt-2 ${gitshow ? "block" : "hidden"}`}>
                  <AddLinks icon={<FaGithub />} color={''} linkName={"Github"} />
                </div>
                <div className={`mt-2 ${ytshow ? "block" : "hidden"}`}>
                  <AddLinks icon={<FaYoutube />} color={'text-red-500'} linkName={"Youtube"} />
                </div>
                <div className={`mt-2 ${Xshow ? "block" : "hidden"}`}>
                  <AddLinks icon={<FaSquareXTwitter />} color={''} linkName={"Twitter/X"} />
                </div>
                <div className={`mt-2 ${personalLinkshow ? "block" : "hidden"}`}>
                  <AddLinks icon={<PiLinkSimpleBold />} color={''} linkName={"customLink"} />
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