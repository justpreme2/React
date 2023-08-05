import PropTypes from 'prop-types';
import React from 'react';

export default function Product({item}){
    const productImage = require(`../assets/${item.imageURL}`);
  return (
   <div>
        <li className="Products">
        <a href={`/update-product/${item.id}`}>
            <img className="Products__image" src={productImage} alt={item.name} />
            <div className="Products__name">{item.name}</div>
            <small className="Products__type">{item.type}</small>
        </a>
        </li>
    </div>
    );
}

Product.prototype ={
    item: PropTypes.object.isRequired
}