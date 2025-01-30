import React, { useState } from 'react'
import defaultUserPic from '../../Assets/userPic.webp'
import { FaPlus } from "react-icons/fa6";

const Profilepic = () => {
    let [img,setImg] = useState(defaultUserPic)
    const setImageinDef = (event) => {
        let file = event.target.files[0]
        if(file){
            setImg(URL.createObjectURL(file))
        }
    }

    return (
        <div className='flex gap-4 mt-6'>

            <div className='w-[60px] h-[60px]'>
                <img src={img} alt="userdefaultpic" id="userdefaultpic" className='bg-gray-400 w-full h-full rounded-full object-cover' />
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