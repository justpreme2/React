import React from 'react'
import PropTypes from 'prop-types';

export default function Container({children}){
  return <main>{children}</main>;
}

Container.prototype ={
    children: PropTypes.node.isRequired
}

