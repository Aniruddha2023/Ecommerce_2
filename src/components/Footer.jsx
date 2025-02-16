import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm w-full'>
      {/* Logo and Description */}
      <div>
        <img src={assets.logo3} className='mb-5 w-32' alt="Logo" />
        <p className='w-full md:w-1/2 text-gray-400'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
        </p>
      </div>

      {/* Company Links */}
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      {/* Get in Touch Section */}
      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+880 180123456789</li>
          <li>contact@ecom.com</li>
        </ul>
        <div className="flex gap-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} className="text-blue-600 hover:scale-110 transition-transform" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} className="text-blue-400 hover:scale-110 transition-transform" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className="text-pink-500 hover:scale-110 transition-transform" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className="text-blue-700 hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="col-span-3">
        <hr />
        <p className='text-sm py-5 text-center'>© 2024 Ecom. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
