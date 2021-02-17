import PropTypes from "prop-types";
import React from 'react';

const Star = (props) => {
  const {
    id,
    title,
    onClickStar,
  } = props;
  return (<>
    <input onClick={onClickStar} className="form__rating-input visually-hidden" name="rating" value={id} id={`${id}-stars`}
      type="radio"/>
    <label htmlFor={`${id}-stars`} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"/>
      </svg>
    </label>
  </>
  );
};

Star.propTypes = {
  onClickStar: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
};

export default Star;
