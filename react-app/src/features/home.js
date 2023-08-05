import data from '../app/data'
import React, { useState } from 'react'
import Product from '../Product'
import AddForm from '../Product/AddForm'

let currentProductId =9

export default function Home(){
    const [products,setProducts] = useState(data) 
    function addProduct(product) {
      const newProduct = { id: ++currentProductId, ...product };
      setProducts([...products, newProduct]);
    }
  return (
    <div>
  <h1>New Products</h1>
  <ul className="Home__products">
    {products.map((product) => (
      <Product item={product} key={product.id}/>
    ))}
  </ul>
  <AddForm addProduct={addProduct}/>
</div>
  );
}


