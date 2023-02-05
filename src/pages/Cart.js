import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";


const Cart = () => {

  const cart = useSelector((state) => state.cart);

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2>This is cart page</h2>
      <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {cart?.sort((a,b) =>a.id - b.id).map((product) => (
          <ProductCard key={product.price} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Cart;
