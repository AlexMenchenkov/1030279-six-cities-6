import React from 'react';
import Star from '/src/components/star/star';
import {ONE} from '/src/consts';
import {starsData} from '/src/consts';

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
