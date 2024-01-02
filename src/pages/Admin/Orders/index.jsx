import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminOrders = () => {
  return (
    <div className='p-6 h-full'>
      <Outlet/>
    </div>
  )
}

export default AdminOrders