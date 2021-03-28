import React from 'react';
import {props} from './star-prop';

const Star = ({id, title, handleClickStar}) => {

  return (<>
    <input onClick={handleClickStar} className="form__rating-input visually-hidden" name="rating" value={id} id={`${id}-stars`}
      type="radio"/>
    <label htmlFor={`${id}-stars`} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"/>
      </svg>
    </label>
  </>
  );
};

Star.propTypes = props;

export default Star;
