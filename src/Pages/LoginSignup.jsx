import React from 'react'

export default function LoginSignup() {
  return (
    <div className='login-signUp w-full h-auto bg-[#fce3fe] py-[100px] '>
      <div className='login-signup-container w-[580px] h-auto bg-white m-auto py-[40px] px-[60px] '>
        <h1 className='my-5 '>Sign UP</h1>
        <div className='fields flex flex-col gap-[30px] mt-[30px] '>
          <input type='text' placeholder='Your name' className='h-[72px] w-full ps-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg' />
          <input type='email' placeholder='Email address' className='h-[72px] w-full ps-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg' />
          <input type='password' placeholder='Password' className='h-[72px] w-full ps-5 border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg' />
        </div>
        <button className='w-full h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-2xl font-medium cursor-pointer'>Continue</button>
        <p className='login mt-5 tect-[#5c5c5c] text-lg font-medium '>Already have an account? <span className='text-[#ff4141] font-semibold'>Login here</span></p>
        <div className='agree flex items-center mt-[25px] gap-5 text-[#5c5c5c] text-lg font-medium'>
          <input type='checkbox' name='' id=''/>
          <p className=''>By continuing, i agree the terms of user & privacy policy</p>
        </div>
      </div>
    </div>
  )
}
