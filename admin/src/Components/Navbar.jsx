import React from 'react'
import navlogo from '../assets/nav-logo.svg';
import navProfile from '../assets/nav-profile.svg';

export default function Navbar() {
  return (
    <div className='navbar flex items-center justify-between py-[15px] sm:py-[15px] px-[20px] sm:px-[60px] shadow-md mb-[1px] bg-white'>
        <img src={navlogo} alt="" className='nav-logo w-[100px] sm:w-[200px]' />
        <img src={navProfile} alt="" className='nav-profile w-[45px] sm:w-[75px]' />
    </div>
  )
}
