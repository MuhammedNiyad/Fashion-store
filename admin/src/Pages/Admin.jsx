import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../Components/Sidebar'
import AddProduct from '../Components/AddProduct';
import ListProduct from '../Components/ListProduct';

export default function Admin() {
  return (
    <div className='admin flex flex-col sm:flex-row'>
        <Sidebar />
        <Routes>
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/listproduct' element={<ListProduct />} />
        </Routes>
    </div>
  )
}
