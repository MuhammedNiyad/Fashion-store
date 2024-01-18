import { Link } from 'react-router-dom';
import addProduct_icon from '../assets/Product_Cart.svg';
import list_product_icon from '../assets/Product_list_icon.svg';

export default function Sidebar() {
  return (
    <div className='sidebar flex flex-row sm:flex-col justify-center sm:justify-normal py-[30px] sm:pt-[30px] gap-5 w-full max-w-none sm:max-w-[250px] h-auto sm:h-screen bg-white'>
        <Link to={'/addproduct'} style={{textDecoration: "none"}}>
            <div className="sidebar-item flex items-center justify-center m-0 sm:mx-5 py-[5px] px-[5px] sm:px-[10px] rounded-[6px] bg-[#f6f6f6] gap-1 sm:gap-5 cursor-pointer">
                <img src={addProduct_icon} alt="" />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration: "none"}}>
            <div className="sidebar-item flex items-center justify-center m-0 sm:mx-5 py-[5px] px-[5px] sm:px-[10px] rounded-[6px] bg-[#f6f6f6] gap-1 sm:gap-5 cursor-pointer">
                <img src={list_product_icon} alt="" />
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}
