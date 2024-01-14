import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {

    const [menu, setMenu] = useState('shop');

  return (
    <div className='navbar flex justify-around p-4 shadow-sm shadow-black'>
      <div className='nav-logo flex items-center gap-2'>
        <img src={logo} alt='logo' />
        <p className='text-[#171717] text-4xl font-semibold '>Fashion</p>
      </div>
      <ul className='nav-menu flex items-center list-none gap-[50px] text-[#626262] text-xl font-medium'>
        <li onClick={()=>setMenu("shop")} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link to={'/'}>Shop</Link>{menu === 'shop'? <hr className='border-[2px] border-red-600 w-full'/>: ''}</li>
        <li onClick={()=>setMenu("men")} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link to={'/men'}>Men</Link>{menu === 'men'? <hr className='border-[2px] border-red-600 w-full'/>: ''}</li>
        <li onClick={()=>setMenu("women")} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link to={'women'}>Women</Link>{menu === 'women'? <hr className='border-[2px] border-red-600 w-full'/>: ''}</li>
        <li onClick={()=>setMenu("kids")} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link to={'kids'}>Kids</Link>{menu === 'kids'? <hr className='border-[2px] border-red-600 w-full'/>: ''}</li>
      </ul>
      <div className='nav-login-cart flex items-center gap-[45px] '>
        <Link to={'/login'}><button className='w-[157px] h-[58px] outline-none border-[1px] border-[#7a7a7a] rounded-[75px] text-[#515151] text-xl font-medium bg-white cursor-pointer active:bg-slate-200 '>Login</button></Link>
        <Link  to={'cart'}><img src={cart_icon} alt='cart-icon' /></Link>
        <div className='w-5 h-5 flex justify-center items-center -mt-9 -ms-14 rounded-[11px] text-sm bg-red-600 text-white'>0</div>
      </div>
    </div>
  )
};