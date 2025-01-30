import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import whiteBg from '../../Assets/whiteBg.webp'

const Backgroundpic = () => {
    let [img, setImg] = useState(whiteBg)
    const setImageinDef = (event) => {
        let file = event.target.files[0]
        if (file) {
            setImg(URL.createObjectURL(file))
        }
    }
    return (
        <>
            <div className='flex items-center justify-center gap-4'>
                <div className='h-28 w-20 rounded-xl border'>
                    <img src={img} alt="userdefaultBg" id="userdefaultBg" className='w-full h-full rounded-xl object-cover' />
                </div>

                <label htmlFor="updateBg" className='cursor-pointer'>
                    <div className='relative w-[60px] h-[60px] rounded-full outline outline-1 outline-gray-400'>
                        <FaPlus className='absolute bottom-[1.2rem] right-[1.2rem] text-xl' />
                    </div>
                </label>
                <input type="file" name="userBackground" id="updateBg" accept='image/jpeg, image/png, image/jpg, image/webp' className='hidden'
                    onChange={setImageinDef}
                />
            </div>
        </>
    )
}

export default Backgroundpic