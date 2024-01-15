import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';
export default function Hero() {
  return (
    <div className='hero h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]  flex '>
        <div className='hero-left flex flex-1 flex-col justify-center gap-4 pl-44'>
            <h2 className='text-2xl font-semibold uppercase leading-none'>New Arrivals only</h2>
            <div>
                <div className='hero-hand-icon flex items-center gap-5'>
                    <p className='text-[100px] font-bold leading-tight '>new</p>
                    <img src={hand_icon} alt='hand_icon' className='w-24'/>
                </div>
                <p className='text-[100px] font-bold leading-tight'>collections</p>
                <p className='text-[100px] font-bold leading-tight '>for everyone</p>
            </div>
            <div className='hero-latest-btn flex justify-center items-center gap-4 w-[310px] h-[70px] rounded-[75px] mt-8 bg-[#ff4141] text-white text-xl font-medium capitalize '>
                <div>latest collection</div>
                <img src={arrow_icon} />
            </div>
        </div>
        <div className='hero-right flex flex-1 items-center justify-center '>
            <img src={hero_image}/>
        </div>
    </div>
  )
}
