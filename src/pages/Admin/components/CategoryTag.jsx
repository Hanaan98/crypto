import React from 'react'

const CategoryTag = ({name}) => {
  return (
    <div className='bg-white px-2  rounded-xl flex justify-center items-center'>
        <span className='text-[10px] font-semibold text-gray-900'>{name}</span>
    </div>
  )
}

export default CategoryTag