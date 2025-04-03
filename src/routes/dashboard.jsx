import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Dashnav from '../Components/Admin/Dashnav'
import DashnavB from '../Components/Admin/DashnavB'
import Mycontext from '../util/Mycontext'
import userPic from '../Assets/userPic.webp'

const Dashboard = () => {

  const [isDateModal, setIsDateModal] = useState(false)
  const [statsDate, setStatsDate] = useState(6)
  const [Views, setViews] = useState(0)
  const [ClickRate, setClickRate] = useState(0)
  const [Clicks, setClicks] = useState(0)
  const [Subscribers, setSubscribers] = useState(0)
  const [data, setData] = useState([])
  const [showViews, setShowViews] = useState(true)
  const [showClickRate, setShowClickRate] = useState(true)
  const [showClicks, setShowClicks] = useState(true)
  const [showSubs, setShowSubs] = useState(true)
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false)
  const [isEditProfileModalNandBOpen, setIsEditProfileModalNandBOpen] = useState(false)
  const [isResizeimageModalOpen, setIsResizeimageModalOpen] = useState(false)
  const [isResizeBgimageModalOpen, setIsResizeBgimageModalOpen] = useState(false)
  const [isResizethumbnailModalOpen, setIsResizethumbnailModalOpen] = useState(false)
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false)
  const [profileImage, setProfileImage] = useState(userPic)
  const [bgImage, setBgImage] = useState(userPic)
  const [nameAndBio, setNameAndBio] = useState({ name: "userName", bio: "Bio of User" })
  const [linkData, setLinkData] = useState([
    { name: "Gintoki", link: "https://www.google.com/", id: 1 ,showProto:true },
  ]);

  useEffect(() => {
    setData([
      {
        "date": "2025-03-20",
        "clicks": 120,
        "subs": 10,
        "views": 300,
        "clickRate": 40
      },
      {
        "date": "2025-03-21",
        "clicks": 150,
        "subs": 15,
        "views": 400,
        "clickRate": 37.5
      },
      {
        "date": "2025-03-22",
        "clicks": 130,
        "subs": 12,
        "views": 350,
        "clickRate": 37.1
      },
      {
        "date": "2025-03-23",
        "clicks": 170,
        "subs": 20,
        "views": 450,
        "clickRate": 37.8
      },
      {
        "date": "2025-03-24",
        "clicks": 140,
        "subs": 18,
        "views": 420,
        "clickRate": 33.3
      },
    ])
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      const latestData = data[data.length - 1];
      setViews(latestData.views);
      setClickRate(latestData.clickRate);
      setClicks(latestData.clicks);
      setSubscribers(latestData.subs);
    }
  }, [data]);

  return (
    <>
      <Mycontext.Provider value={{ isDateModal, setIsDateModal, statsDate, setStatsDate, Views, setViews, ClickRate, setClickRate, Clicks, setClicks, Subscribers, setSubscribers, data, setShowViews, setShowClickRate, setShowClicks, setShowSubs, showViews, showClickRate, showClicks, showSubs, isEditProfileModalOpen, setIsEditProfileModalOpen, isEditProfileModalNandBOpen, setIsEditProfileModalNandBOpen, isResizeimageModalOpen, setIsResizeimageModalOpen, isResizeBgimageModalOpen, setIsResizeBgimageModalOpen, isResizethumbnailModalOpen, setIsResizethumbnailModalOpen, isAddLinkModalOpen, setIsAddLinkModalOpen, profileImage, setProfileImage, bgImage, setBgImage, nameAndBio, setNameAndBio,linkData, setLinkData }}>
        <div className='md:hidden'>

          <Outlet />

          <Dashnav />
        </div>

        <div className='hidden md:grid md:grid-cols-4 xl:grid-cols-7'
          onClick={() => (
            setIsDateModal(false),
            setIsEditProfileModalOpen(false)
          )}
        >

          <div className='col-span-1 sticky top-0 h-screen overflow-y-auto border border-gray-200'>
            <DashnavB />
          </div>

          <div className='col-span-3 xl:col-span-6'>
            <Outlet />
          </div>



        </div>
      </Mycontext.Provider >
    </>
  )
}

export default Dashboard