import React from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';


const Contact = () => {
  return (
    <div className="my-10 flex flex-col justify-center md:flex-row md:gap-10">
      
      {/* Left Side Image */}
      <img
        className="w-full md:max-w-[480px]"
        src={assets.contact_img} // Replace 'assets.contactImage' with your actual image path or import
        alt="Contact"
      />

      {/* Right Side Contact Information */}

      
      <div className="flex flex-col justify-center items-start gap-4">
      <div className='flex justify-center items-center mb-8 text-4xl'>
        <Title text1={'Contact'} text2={'Us'} />
          </div>
        <p className="font-semibold text-xl text-gray-600">54709 Willms Station</p>
        <p className="text-gray-500">Tel: (415) 555-0132</p>
        <p className="font-semibold text-xl text-gray-600">Learn more about our company and services</p>

        {/* Button */}
        <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white">
          Contact Us
        </button>
      </div>
      
    </div>
    
  )
}

export default Contact