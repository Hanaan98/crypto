import React from 'react'

const FormInput = ({title , placeholder}) => {
    return (
        <div className='w-full'>
            <p className='text-white'>{title} :</p>
            <div className="flex h-[46px] mt-2 items-center rounded-lg px-[8px] py-[8px] bg-white">
            <input
              placeholder={placeholder}
              className="flex-1 focus:outline-none"
              type="text"
            />
          </div>
        </div>
    
    )
}

export default FormInput