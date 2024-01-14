import React from 'react'

export default function DescriptionBox() {
  return (
    <div className='description-box my-[120px] mx-[170px]'>
        <div className='desc-navigator flex'>
            <div className='nav-box flex items-center justify-center text-base font-semibold w-[171px] h-[70px] border border-[#d0d0d0]'>Description</div>
            <div className='nav-box fade bg-[#fbfbfb] text-[#555] flex items-center justify-center text-base font-semibold w-[171px] h-[70px]border border-[#dd0d0d0]'>Reviews (122)</div>
        </div>
        <div className='discbox-description flex flex-col gap-[25px] border border-[#d0d0d0] p-[48px] pb-[70px] '>
            <p>In the quiet stillness of a tranquil evening, as the sun dips below the horizon, painting the sky with hues of orange and pink, one can't help but marvel at the beauty of nature. The gentle rustle of leaves in the soft breeze and the distant sounds of nature create a symphony of serenity. In these moments of calm, the world seems to pause, allowing a peaceful reflection on the simple yet profound wonders that surround us. It is in these quiet interludes that we find solace and connect with the timeless beauty of the world.</p>
            <p>In the quiet stillness of a tranquil evening, as the sun dips below the horizon, painting the sky with hues of orange and pink, one can't help but marvel at the beauty of nature. The gentle rustle of leaves in the soft breeze and the distant sounds of nature create a symphony of serenity. 
            </p>
        </div>
    </div>
  )
}
