import React from 'react'
import { Link } from 'react-router-dom'

export default function Item(props) {
  return (
    <div className='item w-[350px] hover:scale-105 duration-200'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image}/></Link>  
        <p className='my-[6px]'>{props.name}</p>
        <div className='item-prices flex gap-5 '>
            <div className='new-price text-[#374151] text-lg font-semibold'>
                ${props.new_price}
            </div>
            <div className='old-price text-[#8c8c8c] text-lg font-medium line-through'>
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}
