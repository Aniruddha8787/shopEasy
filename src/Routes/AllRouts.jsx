import React from 'react'
import Cart from './Cart';
import Home from './Home'
import Login from './Login';
import Product from './Product'
import { Routes,  Route} from "react-router-dom";
import SingleProduct from '../Components/SingleProduct';

const AllRouts = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<SingleProduct/>}/>
      </Routes>
    );
}

export default AllRouts;