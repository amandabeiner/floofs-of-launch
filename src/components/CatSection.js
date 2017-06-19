import React from 'react';
import CatTile from './CatTile';

const CatSection = props => {
  let cats = props.cats.map(cat => {
    return(
      <CatTile
        cat={cat}
        key={cat.id}
      />
    )
  })
  return(
    <div className="row">
      <h3>Cats</h3>
      {cats}
    </div>
  )
}

export default CatSection;
