import React, { useEffect, useRef, useState } from 'react'
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from 'react-router';

const AdminHeader = ({text}) => {

    return (
        <>
            <div className='border border-gray-200 flex justify-between items-center px-4 py-4 sticky top-0 bg-white z-10' id='adminHeader'>

                <h2 className='text-2xl font-bold'>{text}</h2>

                <div className='flex items-center gap-4'>

                    <button><NavLink to={"/register/select-price"} className='text-purple-500 font-medium outline px-4 py-2 rounded-xl text-sm'>Try Pro for free</NavLink></button>

                    <NavLink to={"/"} className="text-2xl"><IoIosLogOut /></NavLink>

                </div>

            </div>
        </>
    )
}

export default AdminHeader