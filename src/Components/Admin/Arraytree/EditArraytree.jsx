import React, { useContext, useState } from 'react'
import LiveArraytreeurl from './LiveArraytreeurl'
import EditProfile from './EditProfile'
import AddLinkBtn from './AddLinkBtn'
import AddLinks from './AddLinks'
import { DndContext, useDroppable, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import Mycontext from '../../../util/Mycontext'
import { AnimatePresence } from 'motion/react'

const EditArraytree = () => {
  const { setNodeRef } = useDroppable({ id: 'droppable' });

  const { linkData, setLinkData } = useContext(Mycontext)

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = linkData.findIndex(item => item.id === active.id);
    const newIndex = linkData.findIndex(item => item.id === over.id);
    setLinkData(arrayMove(linkData, oldIndex, newIndex));
  };

  return (
    <>
      <LiveArraytreeurl text={"arraytr.ee/sudip29"} />

      <div className='xl:max-w-[500px] mx-auto'>
        <div className='mt-8'></div>
        <EditProfile />

        <div className='mt-8'></div>
        <AddLinkBtn />

        <p className='mt-6 font-medium text-xl'>Links</p>

        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={linkData.map(item => item.id)}>
            <div className='mt-4' ref={setNodeRef}>
              <AnimatePresence mode='popLayout'>
                {
                  linkData.length > 0 &&
                  linkData.map((link) => (
                    <AddLinks key={link.id} name={link.name} link={link.link} id={link.id} />
                  ))
                }
              </AnimatePresence>
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </>
  );
};

export default EditArraytree;
