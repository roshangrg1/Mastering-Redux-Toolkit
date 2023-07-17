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
      <h1>Product DashBoard</h1>
    
      <ProductCard  products={products}/>
    </div>
  );
};

export default Product;
