import React from 'react';
import Spin from "../spin/spin"

import './Witness.scss'

const WitnessPreview = ({ title, items }) => (
  <div className="Witness-Preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="witness-preview">
      {items
      .filter((item, idx)  => idx < 6)
      .map(item => (
       <div key ={item.id}>{item.name}</div>
       
      ))}
    </div>
  </div>
);

export default WitnessPreview;