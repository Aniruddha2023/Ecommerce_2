import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'


const PlaceOder = () => {
  const [methood, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-center gap-4 pt-14 sm:min-h-[80vh] border-top'>

<div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
  <div className='text-1xl sm:text-2xl my-3'>
    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
  </div>
  <div className='flex gap-3'>
    <input className='border border-gray-300 py-1.5 w-full px-3.5' type="text" placeholder='First Name' />
    <input className='border border-gray-300 py-1.5 w-full px-3.5' type="text" placeholder='Last Name' />
  </div>
  <input className='border border-gray-300 py-1.5 w-full px-3.5' type="email" placeholder='Email Address' />
  <input className='border border-gray-300 py-1.5 w-full px-3.5' type="text" placeholder='Street Address' />
  <div className='flex gap-3'>
    <input className='border border-gray-300 py-1.5 w-full px-3.5' type="text" placeholder='City' />
    <input className='border border-gray-300 py-1.5 w-full px-3.5' type="text" placeholder='State' />
  </div>
  <div className='flex gap-3'>
    <input className='border border-gray-300 py-1.5 w-full px-3.5' type="number" placeholder='Zip Code' />
    <input className='border border-gray-300 py-1.5 w-full px-3.5' type="text" placeholder='Country' />
  </div>
  <input className='border border-gray-300 py-1.5 w-full px-3.5' type="number" placeholder='Phone Number' />
  </div>

  <div className='mt-8'>
    <div className='mt-8 min-w-80'>
      <CartTotal/>
    </div>
    <div className='mt-8'>
      <Title text1={'Payment Method'} />
      <div className='flex gap-3 flex-col lg:flex-row'>
        <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
          <p className={`min-w-3.5 h-3.5 border rounded-full ${methood=== 'stripe' ? 'bg-green-500': ''} `}>
            <img src={assets.stripe_logo} alt="" />
          </p>
        </div>
        <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
          <p className={`min-w-3.5 h-3.5 border rounded-full ${methood=== 'razorpay' ? 'bg-green-500': ''} `}>
            <img src={assets.razorpay_logo} alt="" />
          </p>
        </div>
        <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
          <p className={`min-w-3.5 h-3.5 border rounded-full ${methood=== 'cod' ? 'bg-green-500': ''} `}>
         <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p> 
          </p>
        </div>
        <div>
        <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-'>PLACE ORDER</button>
      </div>
      </div>
      

    </div>

  </div>

</div>
  
  )
}

export default PlaceOder