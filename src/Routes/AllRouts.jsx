import React from "react";
import Cart from "./Cart";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "../Components/SingleProduct";
import PrivateRoute from "../Components/PrivateRoute";
import Payment from "./Payment";

const AllRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      {/* <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        /> */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default AllRouts;
