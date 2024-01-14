import new_collection from '../assets/new_collections';
import Item from './Item';

export default function NewCollections() {
  return (
    <div className='new-collection flex flex-col items-center gap-[10px] mb-[100px]'>
        <h1 className='text-[50px] font-semibold'>NEW COLLECTIONS</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525] ' />
        <div className='collections flex flex-wrap justify-center mt-50px gap-[30px] px-[50px] '>
            {
                new_collection.map((item, index)=>{
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>
    </div>
  )
}
