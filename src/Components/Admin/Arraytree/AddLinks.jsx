import React, { useContext, useRef, useState } from 'react'
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { HiOutlinePencil } from "react-icons/hi";
import { TfiGallery } from "react-icons/tfi";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
import Mycontext from '../../../util/Mycontext';
import { useSortable } from '@dnd-kit/sortable';
import {motion, AnimatePresence } from 'motion/react';

const AddLinks = ({ name, link, id }) => {

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  const [isTitleEditable, setIsTitleEditable] = useState(false)
  const [isUrlEditable, setIsUrlEditable] = useState(false)
  const isLinkOn = useRef(true)
  const { setIsResizethumbnailModalOpen, linkData, setLinkData } = useContext(Mycontext)
  const [profileTitle, setProfileTitle] = useState(name)
  const [url, setUrl] = useState(link)

  return (
      <motion.div className='shadow-lg flex justify-between items-center gap-2 bg-white border pr-4 pl-2 pt-6 pb-4 rounded-2xl mt-4' ref={setNodeRef} style={style} 
      initial={{ scale:1 }} exit={{ scale:0 }} transition={{ duration:0.2 }}
      layout>

        {/* Dnd button */}
        <div className='inline-flex cursor-pointer' {...listeners} {...attributes}>
          <PiDotsThreeVerticalBold />
          <PiDotsThreeVerticalBold className='ml-[-10px]' />
        </div>

        <div className='w-full'>
          {/* Link title and url */}
          <div className='flex justify-between '>
            <div className=''>
              <div className='flex items-center gap-2 cursor-pointer'
                onClick={() => setIsTitleEditable(!isTitleEditable)}
              >
                {isTitleEditable ? (
                  <input
                    type="text"
                    className="focus:outline-none font-medium border-b"
                    name="link-title"
                    value={profileTitle}
                    onChange={(e) => {
                      setProfileTitle(e.target.value);
                      setLinkData(prev =>
                        prev.map(item =>
                          item.id === id ? { name: e.target.value, link: item.link, id: item.id, showProto: item.showProto } : item
                        )
                      );
                    }}
                    autoFocus
                  />
                ) : (
                  <p className="font-medium">{profileTitle}</p>
                )}
                {!isTitleEditable && <HiOutlinePencil />}
              </div>
              <div className='flex items-center mt-2 gap-2 cursor-pointer'
                onClick={() => setIsUrlEditable(!isUrlEditable)}
              >
                {isUrlEditable ? (
                  <input
                    type="text"
                    className="focus:outline-none font-medium border-b"
                    name="link-url"
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value)
                      setLinkData(prev =>
                        prev.map(item =>
                          item.id === id ? { name: item.name, link: e.target.value, id: item.id, showProto: item.showProto } : item
                        )
                      );
                    }}
                    autoFocus
                  />
                ) : (
                  <p>{url}</p>
                )}
                {!isUrlEditable && <HiOutlinePencil />}
              </div>
            </div>

            {/* on off btn */}
            <div>
              <button className='text-4xl'
                onClick={() => {
                  isLinkOn.current = !isLinkOn.current
                  setLinkData(prev =>
                    prev.map(item =>
                      item.id === id ? { name: item.name, link: item.link, id: item.id, showProto: isLinkOn.current } : item
                    )
                  );
                }}
              >
                {isLinkOn.current ? <MdToggleOn /> : <MdOutlineToggleOff />}
              </button>
            </div>
          </div>

          {/* Add thumbnail and delete */}
          <div className='flex justify-between mt-4'>
            <div
              onClick={() => setIsResizethumbnailModalOpen(true)}
            >
              <button><TfiGallery /></button>
            </div>

            {/* Delete btn */}
            <div
              onClick={() => {
                setLinkData(prev => prev.filter(item => item.id !== id))
              }}
            >
              <button><FaRegTrashAlt /></button>
            </div>

          </div>
        </div>

      </motion.div>
  )
}

export default AddLinks