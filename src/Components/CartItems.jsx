import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'


export default function CartItems() {
    const {all_product, cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cart-items my-[100px] mx-[170px]'>
        <div className="foramt-main flex flex-row items-center gap-[75px] py-5 text-[#454545] text-lg font-semibold">
            <p>Products</p>
            <p className='px-[150px]'>Title</p>
            <p className='pl-[175px]'>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-[3px] bg-[#e2e2e2] border-0 ' />
        {all_product.map((item)=>{
            if(cartItems[item.id]>0){
                return(
                    <div>
                        <div className="cartItem-format flex flex-row items-center gap-[75px] py-5 text-[#454545] text-lg font-medium ">
                            <img src={item.image} alt="" className='cart-product-icon h-[62px]' />
                            <p className='w-[505px]'>{item.name}</p>
                            <p className='pl-9'>${item.new_price}</p>
                            <button className='cartItem-quantity ml-[10px] w-[64px] h-[50px] border-[2px] border-[#ebebeb] bg-white text-center'>{cartItems[item.id]}</button>
                            <p className='pl-3'>${item.new_price * cartItems[item.id]}</p>
                            <img src={remove_icon} alt="" onClick={()=>{removeFromCart(item.id)}} className='w-[15px] cursor-pointer mx-[35px]' />
                        </div>
                        <hr className='h-[3px] bg-[#e2e2e2] border-0 ' />
                    </div>
                )
            }
            return null;
        })}
        <div className="cartItems-down flex my-[100px] ">
            <div className="cart-total flex-1 flex-col mr-[200px] gap-[40px]">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item flex justify-between py-[15px] ">
                        <p>Subtotal</p>
                        <p>${0}</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item flex justify-between py-[15px] ">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item flex justify-between py-[15px] ">
                        <h3>Total</h3>
                        <h3>${0}</h3>
                    </div>
                </div>
                <button className='w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-white font-semibold cursor-pointer'>Proceed to checkout</button>
            </div>
            <div className="cartitems-promocode flex-1">
                <p className='text-[#555] '>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox w-[504px] mt-[20px] pl-[20px] h-[58px] bg-[#eaeaea]">
                    <input type="text" placeholder='promo code' className='border-none bg-transparent w-[330px] h-[50px] ' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
