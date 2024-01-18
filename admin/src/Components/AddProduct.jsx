import React, { useState } from 'react'
import upload_area from '../assets/upload_area.svg';

export default function AddProduct() {

    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image:"",
        category:"",
        new_price:"",
        old_price:""
    })

    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    }
    const changeHandler = (e)=>{
        setProductDetails({...productDetails, [e.target.name]:e.target.value})
    }

    const Add_Product = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:5000/upload',{
            method:'POST',
            headers: {
                Accept:"application/json"
            },
            body
        })
    }

  return (
    <div className='add-product box-border w-auto sm:w-full max-w-[800px] py-[30px] px-[50px] my-5 mx-[30px] rounded-[6px] bg-white '>
        <div className="addproduct-itemfield w-full text-[#7b7b7b] ">
            <p>Product title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' className='box-border w-full h-[50px] rounded-[4px] pl-[15px] border outline-none text-[#7b7b7b] font-[Poppins] border-[#7b7b7b]' />
        </div>
        <div className="addproduct-price flex gap-10 ">
            <div className="addproduct-itemfield w-full text-[#7b7b7b] ">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' className='box-border w-full h-[50px] rounded-[4px] pl-[15px] border outline-none text-[#7b7b7b] font-[Poppins] border-[#7b7b7b]' />
            </div>
            <div className="addproduct-itemfield w-full text-[#7b7b7b] ">
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' className='box-border w-full h-[50px] rounded-[4px] pl-[15px] border outline-none text-[#7b7b7b] font-[Poppins] border-[#7b7b7b]' />
            </div>
        </div>
        <div className="addproduct-itemfield w-full text-[#7b7b7b] ">
            <p>Product category</p>
            <select  value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selector p-[10px] w-[100px] h-[50px] border border-[#7b7b7b82] rounded-[4px] outline-none'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
        </div>
        <div className="addproduct-itemfield w-full text-[#7b7b7b] ">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} alt="" className='addproduct-thumnail-img h-[120px] w-[120px] rounded-[10px] object-contain my-[10px]' />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden  className='box-border w-full h-[50px] rounded-[4px] pl-[15px] border outline-none text-[#7b7b7b] font-[Poppins] border-[#7b7b7b]'/>
        </div>
        <button onClick={()=>Add_Product()} className='addproduct-btn mt-5 w-[160px] h-[50px] rounded-[6px] bg-[#6079ff] border-none cursor-pointer text-white'>ADD</button>
    </div>
  )
}
