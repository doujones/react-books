import React from 'react';

import "./spin.scss";

const Spin = ({id, name, price, imageUrl}) => (
  <div className="spin">
    <div className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="spin-footer">
      <span className="name">{name}</span>
      <span className="name">{price}</span>
    </div>
  </div>
)

export default Spin;