import React from 'react'
import ProductCard from '../../components/ProductCard'

const RelatedProducts = () => {
  return (
    <div className='mt-8'>
        <p className='text-[20px] font-medium'>Related Products</p>
        
        <div className='mt-4 flex flex-wrap gap-6'>
            {
                new Array(6).fill(0).map((_ , index) => {
                    return (
                        <ProductCard/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default RelatedProducts