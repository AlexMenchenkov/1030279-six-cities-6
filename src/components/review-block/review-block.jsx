import PropTypes from "prop-types";
import React from 'react';
import Review from '/src/components/review/review.jsx';
import {propTypesReview} from '/src/consts.js';
import SelfReview from '/src/components/self-review/self-review.jsx';

const ReviewBlock = (props) => {
  const {
    reviews
  } = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {reviews.map((review) => {
        return (
          <Review
            review={review}
            key={review.id}
          />
        );
      })}
      <SelfReview reviews={reviews}/>
    </section>
  );
};

ReviewBlock.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesReview.isRequired,
      ),
  ).isRequired,
};


export default ReviewBlock;
