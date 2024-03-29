import footer_logo from '../assets/logo_big.png';
import instagram_icon from '../assets/instagram_icon.png';
import pintester_icon from '../assets/pintester_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';


export default function Footer() {
  return (
    <div className='footer flex flex-col justify-center items-center gap-[50px]'>
        <div className='footer-logo flex items-center gap-[20px]'>
            <img src={footer_logo}/>
            <p className='text-[46px] text-[#383838] font-bold'>FASHION</p>
        </div>
        <ul className='footer-links flex list-none gap-[50px] text-[#252525] text-xl '>
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Offices</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        <div className='footer-social-icon flex gap-[20px]'>
            <div className='icon-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
                <img src={instagram_icon} />
            </div>
            <div className='icon-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
                <img src={pintester_icon} />
            </div>
            <div className='icon-container p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
                <img src={whatsapp_icon} />
            </div>
        </div>
        <div className='footer-copyright flex flex-col items-center gap=[30px] w-full mb-[30px] text-[#1a1a1a] text-xl '>
            <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]' />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}
