import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/collection', label: 'COLLECTION' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' },
  ];

  const renderNavLinks = (closeSidebar) =>
    navLinks.map(({ to, label }) => (
      <NavLink
        key={to}
        onClick={closeSidebar}
        className="py-2 pl-6 border"
        to={to}
      >
        {label}
      </NavLink>
    ));

  return (
    <div className="sticky top-0 bg-white shadow-md z-50 flex  justify-between px-5 sm:px-10 py-5 font-medium w-full">
  <Link to="/">
    <img src={assets.logo3 || '/default-logo3.png'} className="w-24" alt="Logo" />
  </Link>

  {/* Desktop Navigation */}
  <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
    {navLinks.map(({ to, label }) => (
      <NavLink key={to} to={to} className="flex flex-col items-center gap-1">
        <p>{label}</p>
        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
      </NavLink>
    ))}
  </ul>

  {/* Navbar Actions */}
  <div className="flex items-center gap-6">
    <button onClick={() => setShowSearch(true)}>
      <img src={assets.search_icon} className="w-7 cursor-pointer" alt="Search Icon" />
    </button>

    {/* Profile Menu */}
    <div className="group relative">
    <Link to= '/login'>  <img className="w-7 cursor-pointer" src={assets.profile_icon} alt="Profile Icon" /></Link> 
      <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
          <p className="cursor-pointer hover:text-black">My Profile</p>
          <p className="cursor-pointer hover:text-black">Order</p>
          <p className="cursor-pointer hover:text-black">Logout</p>
        </div>
      </div>
    </div>

    {/* Cart */}
    <Link to="/cart" className="relative">
      <img src={assets.cart_icon} className="w-7 min-w-5" alt="Cart Icon" />
      <p className="absolute right-[-5px] bottom-[-5px] w-5 text-center leading-5 bg-black text-white aspect-square rounded-full text-[8px]">
        {getCartCount()}
      </p>
    </Link>

    {/* Mobile Menu Button */}
    <button onClick={() => setVisible(true)} className="sm:hidden">
      <img src={assets.menu_icon} className="w-7" alt="Menu Icon" />
    </button>
  </div>

  {/* Sidebar (Mobile Only) */}
  <div
    className={`absolute top-0 right-0 bottom-0 w-2/3 sm:w-1/4 bg-white transition-transform transform ${
      visible ? 'translate-x-0' : 'translate-x-full'
    } sm:hidden`}
  >
    <div className="flex flex-col text-gray-600 h-full">
      <div
        onClick={() => setVisible(false)}
        className="flex items-center gap-4 p-3 cursor-pointer"
      >
        <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back Icon" />
        <p>Back</p>
      </div>
      {renderNavLinks(() => setVisible(false))}
    </div>
  </div>
</div>

  );
};

export default Navbar;
