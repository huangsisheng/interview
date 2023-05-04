import React, { useState } from 'react';

import { Mask } from './mask';
import { ItemOverlay } from './item-overlay';
import { FeatureSelection } from '../feature-selection';

export const App = ({ itemGroup, mask }) => {
  
  const [pos,setPos] = useState([0,0])
  const [size,setSize] = useState([0,0])

  return (
    <>
      <FeatureSelection setPos={setPos} setSize={setSize}/>
      {mask ? <Mask mask={mask} /> : <></>}
      {itemGroup.map((item) => (
        <ItemOverlay key={item.id} item={item}></ItemOverlay>
      ))}
    </>
  );
};
