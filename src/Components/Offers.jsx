import exclusive_image from '../assets/exclusive_image.png';
export default function Offers() {
  return (
    <div className='offers w-[75%] h-[60vh] flex m-auto px-[140px] mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]'>
        <div className='offers-left flex-1 flex flex-col justify-center'>
            <h1 className='text-[80px] font-semibold'>Exclusive</h1>
            <h1 className='text-[80px] font-semibold'>Offers For You</h1>
            <p className='text-[22px] font-semibold'>ONLY ON BEST BEST SELLER PRODUCTS</p>
            <button className='w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-medium mt-[30px] cursor-pointer'>Check now</button>
        </div>
        <div className='offers-right flex-1 flex items-center justify-end pt-[50px]'>
            <img src={exclusive_image}/>
        </div>
    </div>
  )
}
