import data from '../app/data'
import React, { useState } from 'react'
import Product from '../Product'

export default function Home(){
    const [products,setProducts] = useState(data) 
  return (
    <div>
  <h1>New Products</h1>
  <ul className="Home__products">
    {products.map((product) => (
      <Product item={product} key={product.id}/>
    ))}
  </ul>
</div>
  );
}


