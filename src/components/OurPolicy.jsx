import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row mt-20  justify-around gap-12  sm:gap-2 text-center text-xs sm:text-base md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-bold text-lg sm:text-xl'> Easy Exchange Policy</p>
            <p className='text-gray-500'>We offer hassle free exchange policy</p>
        </div>

        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-bold text-lg sm:text-xl'> 7 Days Return Policy</p>
            <p className='text-gray-500'>We provide 7 day free retturn police</p>
        </div>

        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-bold text-lg sm:text-xl'> Best Customer Support</p>
            <p className='text-gray-500'>We provide 24/7 coustomer support</p>
        </div>

    </div>
  )
}

export default OurPolicy