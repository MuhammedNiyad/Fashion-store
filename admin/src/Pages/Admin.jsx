import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../Components/Sidebar'
import AddProduct from '../Components/AddProduct';
import ListProduct from '../Components/ListProduct';

export default function Admin() {
  return (
    <div className='admin flex sm:flex-col'>
        <Sidebar />
        <h1 className=''>Hello</h1>
        <Routes>
            <>Hello</>
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/listproduct' element={<ListProduct />} />
        </Routes>
    </div>
  )
}
