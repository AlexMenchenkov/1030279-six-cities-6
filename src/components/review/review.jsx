import PropTypes from "prop-types";
import React from 'react';
import {propTypesReview} from '/src/consts.js';

const Review = (props) => {
  const {
    review,
  } = props;
  return (
    <ul className="reviews__list">
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54"
              alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">
            {review.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: review.rating}}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.textComment}
          </p>
          <time className="reviews__time" dateTime={review.fullDate}>{review.month} {review.year}</time>
        </div>
      </li>
    </ul>
  );
};

Review.propTypes = {
  review: PropTypes.shape(
      propTypesReview.isRequired
  )
};

export default Review;
