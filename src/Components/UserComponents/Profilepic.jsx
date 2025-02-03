import React, { useState } from 'react'
import defaultUserPic from '../../Assets/userPic.webp'
import { FaPlus } from "react-icons/fa6";

const Profilepic = () => {
    let [img, setImg] = useState(defaultUserPic)
    let defImg1 = "https://imgs.search.brave.com/zfoHqt9KUOImiZ0lQRyvkzs87HSDrb3tM7M50g6Vw1I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YWJzdHJhY3QtaW1h/Z2Utb2YtY29sb3Jl/ZC1wYXBlci1jcmVh/dGluZy1ob3Jpem9u/dGFsLWxpbmVzLmpw/Zz93aWR0aD0xMDAw/JmZvcm1hdD1wanBn/JmV4aWY9MCZpcHRj/PTA"
    let defImg2 = "https://imgs.search.brave.com/KDTk9A39Fb5DrplC7a-x3xDwhdCzm8rXhB3MtJYlgzE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NTkwMDYyMy9waG90/by9iYWNrZ3JvdW5k/LWJsdXItY29sb3Jm/dWwtb3JhbmdlLXB1/cnBsZS1ibHVlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1r/dnRGYS1icG1fUnk5/blhLTDJERElFUncy/S0paeS1jVGctdk1f/OEZaWlRZPQ"
    const setImageinDef = (event) => {
        let file = event.target.files[0]
        if (file) {
            setImg(URL.createObjectURL(file))
        }
    }

    return (
        <div className='flex gap-4 mt-6'>
            <div className='flex gap-3'>
                <div className='w-[60px] h-[60px] cursor-pointer'>
                    <img src={defImg1} alt="userdefaultpic" id="choosepicOne" tabIndex={0} className='bg-gray-400 w-full h-full rounded-full object-cover focus:outline focus:outline-2' />
                </div>
                <div className='w-[60px] h-[60px] cursor-pointer'>
                    <img src={defImg2} alt="userdefaultpic" id="choosepicTwo" tabIndex={0} className='bg-gray-400 w-full h-full rounded-full object-cover focus:outline focus:outline-2' />
                </div>
                <div className='w-[60px] h-[60px]'>
                    <img src={img} alt="userdefaultpic" id="userdefaultpic" className='bg-gray-400 w-full h-full rounded-full object-cover' />
                </div>
            </div>

            <label htmlFor="updateImg" className='cursor-pointer'>
                <div className='relative w-[60px] h-[60px] rounded-full outline outline-1 outline-gray-400'>
                    <FaPlus className='absolute bottom-[1.2rem] right-[1.2rem] text-xl' />
                </div>
            </label>
            <input type="file" name="userImg" id="updateImg" accept='image/jpeg, image/png, image/jpg, image/webp' className='hidden'
                onChange={setImageinDef}
            />

        </div>
    )
}

export default Profilepic