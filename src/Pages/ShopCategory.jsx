import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../Components/Item';

export default function ShopCategory(props) {

    const {all_product} = useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img src={props.banner} className='block my-[30px] mx-auto w-[82%]'/>
      <div className='indexSort flex mx-[170px] justify-between items-center'>
        <p><span className='font-semibold'>Showing 1-12</span> out of 36 products</p>
        <div className='shopcategory-sort flex gap-2 items-center py-[10px] px-[25px] rounded-[40px] border border-[#888]'>
          Sort by  <img src={dropdown_icon} className=''/>
        </div>
      </div>
      <div className='shopcategory-products my-5 mx-[170px] flex flex-wrap gap-[40px]'>
        {
          all_product.map((item, index)=>{
            if(props.category === item.category){
              return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            } else {
              return null;
            }
          })
        }
      </div>
      <div className='loadmore-btn flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-lg font-medium'>
        Explore More
      </div>
    </div>
  )
}
