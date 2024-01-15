import data_product from '../assets/data';
import Item from '../Components/Item';

export default function RelatedProducts() {
  return (
    <div className='related-products flex flex-col items-center gap-[10px] h-[90vh]'>
        <h1 className='text-[#171717] text-[50px] font-semibold '>Related Porducts</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
        <div className="related-item mt-[50px] flex gap-[30px]">
            {data_product.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}
