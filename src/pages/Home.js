import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";


const Home = () => {
 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => {
      setProducts(data);
    })
},[])

  const state = useSelector((state) => state);
  console.log(state);


  return (
    <div>
      <h2>This is home page</h2>
      <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.price} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
