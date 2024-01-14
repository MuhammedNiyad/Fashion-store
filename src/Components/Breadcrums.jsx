import arrow_icon from '../assets/breadcrum_arrow.png';


export default function Breadcrums(props) {
    const {product} = props;
  return (
    <div className='breadcrum flex items-center gap-[8px] text-[#5e5e5e] text-base font-semibold my-[60px] mx-[170px] capitalize'>
        HOME <img src={arrow_icon}/> SHOP <img src={arrow_icon}/> {product.category} <img src={arrow_icon}/>{product.name}
    </div>
  )
}
