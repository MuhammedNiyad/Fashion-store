import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

export default function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='product-display flex mx-[170px]'>
        <div className='display-left flex gap-[17px]'>
            <div className='img-list flex flex-col gap-5'>
                <img src={product.image} className='h-[135px] w-[250px] '/>
                <img src={product.image} className='h-[135px] w-[250px]'/>
                <img src={product.image} className='h-[135px] w-[250px]'/>
                <img src={product.image} className='h-[135px] w-[250px]'/>
            </div>
            <div className='dispaly-img'>
                <img src={product.image} className='display-main-img w-[60vw] h-[600px]'/>
            </div>
        </div>
        <div className='display-right mx-[70px] flex flex-col'>
            <h1 className='text-[#3d3d3d] text-[40px] font-bold'>{product.name}</h1>
            <div className='display-right-stars flex items-center mt-[30px] gap-[5px] text-[#1c1c1c] '>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_dull_icon}/>
                <p>(122)</p>
            </div>
            <div className='display-right-prices flex my-[40px] gap-[30px] text-2xl font-bold'>
                <div className='display-right-old-price text-[#818181] line-through'>${product.old_price}</div>
                <div className='display-right-new-price text-[#ff4141]'>${product.new_price}</div>
            </div>
            <div className='display-right-deccription'>
            The first paragraph (text-lg, font-semibold, text-gray-700) is styled with a larger font size, bold text, and a dark gray color. The second paragraph (text-sm, text-gray-500, mt-2 for margin-top) is styled with a smaller font size, a lighter gray color, and some top margin.
            </div>
            <div className='display-right-size '>
                <h1 className='mt-[35px] text-[#656565] text-xl font-semibold'>Select Size</h1>
                <div className='display-right-sizes flex my-[30px] gap-[10px]'>
                    <div className='py-[13px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer rounded-[5px]'>S</div>
                    <div className='py-[13px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer rounded-[5px]'>M</div>
                    <div className='py-[13px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer rounded-[5px]'>L</div>
                    <div className='py-[13px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer rounded-[5px]'>XL</div>
                    <div className='py-[13px] px-[20px] bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer rounded-[5px]'>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} className='py-[20px] px-[40px] w-[200px] font-semibold text-white bg-[#ff4141] mb-10 border-none outline-none cursor-pointer '>ADD TO CART</button>
            <p className='display-right-category mt-[5px]'><span className='font-semibold'>Category</span>Women , T-shirt, Crop Top</p>
            <p className='display-right-category mt-[5px]'><span className='font-semibold'>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}
