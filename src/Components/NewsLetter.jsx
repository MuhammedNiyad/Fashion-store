import React from 'react'

export default function NewsLetter() {
  return (
    <div className='newsletter w-[75%] h-[60vh] flex flex-col justify-center items-center m-auto mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] gap-[30px]' >
        <h1 className='text-[#454545] text-[55px] font-semibold'>Get Exclusive Offers On Your Email</h1>
        <p className='text-[#454545] text-xl'>subscribe to our newsletter and stay updated </p>
        <div className='flex items-center justify-center bg-white w-[730px] h-[70x] rounded-[80px] border-[1px] border-[#e3e3e3]'>
            <input type='email' placeholder='Your Email id' className='w-[500px] ms-[30px] border-none outline-none text-[#616161] font-[Poppins] text-base'/>
            <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white text-base cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}
