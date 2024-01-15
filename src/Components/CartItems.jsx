import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'


export default function CartItems() {
    const {all_product, cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cart-items my-[100px] mx-[170px]'>
        <div className="foramt-main flex flex-row items-center gap-[75px] py-5 text-[#454545] text-lg font-semibold">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-[3px] bg-[#e2e2e2] border-0 ' />
        {all_product.map((item)=>{
            if(cartItems[item.id]>0){
                return(
                    <div>
                        <div className="cartItem-format">
                            <img src={item.image} alt="" className='cart-product-icon' />
                            <p>{item.name}</p>
                            <p>${item.new_price}</p>
                            <button className='cartItem-quantity'>{CartItems[item.id]}</button>
                            <p>{item.new_price * CartItems[item.id]}</p>
                            <img src={remove_icon} alt="" onClick={()=>{removeFromCart(item.id)}} />
                        </div>
                        <hr className='h-[3px] bg-[#e2e2e2] border-0 ' />
                    </div>
                )
            }
        })}
    </div>
  )
}
