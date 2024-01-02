import React from 'react'
import SidebarButton from './SidebarButton'

const SideBar = () => {
  return (
    <div className="w-1/5 rounded-xl p-4 h-full bg-accent">
      <h2 className="text-lg font-semibold mb-4 text-heading text-center">Panel</h2>
      
      <div className='flex flex-col items-start gap-6 mt-5'>
        <SidebarButton title={"Products"} navLink={"products"}/>
        <SidebarButton title={"Categories"}  navLink={"categories"} />
        <SidebarButton title={"Orders"} navLink={"orders"}/>
      </div>
      {/* Add more filter groups as needed */}
    </div>
  )
}

export default SideBar