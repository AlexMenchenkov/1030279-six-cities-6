import PropTypes from 'prop-types';
import React, {useState} from 'react';
import Star from '/src/components/star/star.jsx';
import {ONE, ZERO} from '/src/consts.js';

const RowStars = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [rate, setRate] = useState(ZERO);
  const {starsData} = props;
  let maxStarId = starsData.length + ONE;

  const handlerClick = (event) => {
    const {value} = event.target;
    setRate(value);
  };

  return (
    starsData.map((title, index) => {
      return (
        <Star
          title={title}
          key={index}
          id={--maxStarId}
          onClickStar={handlerClick}
        />
      );
    })
  );
};

RowStars.propTypes = {
  starsData: PropTypes.array.isRequired,
};

export default RowStars;
