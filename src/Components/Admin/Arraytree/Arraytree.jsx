import React from 'react'
import AdminHeader from '../AdminHeader'
import EditArraytree from './EditArraytree'
import EditPrototype from './EditPrototype'

const Mylinktree = () => {
  return (
    <>
      <AdminHeader text={"My Arraytree"} />
      <div className='bg-white min-h-svh px-4 pt-6 pb-20 sm:py-6 md:grid md:grid-cols-5 gap-4 '>

        {/* Edit profile option */}
        <div className='md:col-span-3 overflow-hidden'>
          <EditArraytree />
        </div>
          
          {/* Edit prototype option */}
        <div className='md:col-span-2 mt-10 sm:mt-0 flex justify-center'>
          <EditPrototype />
        </div>


      </div>
    </>
  )
}

export default Mylinktree