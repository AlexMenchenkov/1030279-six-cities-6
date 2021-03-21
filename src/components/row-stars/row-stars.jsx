import React from 'react';
import Star from '/src/components/star/star.jsx';
import {ONE} from '/src/consts.js';
import {starsData} from '/src/consts.js';

const RowStars = () => {
  let maxStarId = starsData.length + ONE;

  return (
    starsData.map((title, index) => {
      return (
        <Star
          title={title}
          key={index}
          id={--maxStarId}
        />
      );
    })
  );
};

export default RowStars;
