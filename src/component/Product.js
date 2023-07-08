import React, { useEffect, useState } from 'react'


const Product = () => {

    const [products, setPrdoucts] = useState([])
    useEffect(()=>
    {
        fetch("https://fakestoreapi.com/products")
        .then(data => data.json())
        .then(result => setPrdoucts(result))
    }, [])
  return (
    <div>
        <h1>Product DashBoard</h1>
        {JSON.stringify(products)}
    </div>
  )
}

export default Product