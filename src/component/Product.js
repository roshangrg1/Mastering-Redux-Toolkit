import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProdoucts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProdoucts(result));
      
  }, []);
  return (
    <div>
      <h1 className="text-center text-[30px] font-sans text-[blue] my-5">Product Listing Page</h1>
    
      <ProductCard  products={products}/>
    </div>
  );
};

export default Product;
