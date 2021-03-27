import PropTypes from "prop-types";
import React from 'react';
import Review from '/src/components/review/review';
import {propTypesReview} from '/src/prop-types';
import SelfReview from '/src/components/self-review/self-review';
import {AuthorizationStatus} from '/src/consts';
import {connect} from "react-redux";
import LoadingScreen from '/src/components/loading-screen/loading-screen';

const ReviewBlock = ({comments, checkedAuth, statusAuth}) => {
  if (!checkedAuth) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      {comments.map((review) => {
        return (
          <Review
            review={review}
            key={review.id}
          />
        );
      })}
      {statusAuth === AuthorizationStatus.AUTH && <SelfReview/>}
    </section>
  );
};

ReviewBlock.propTypes = {
  comments: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesReview.isRequired,
      ),
  ).isRequired,
  statusAuth: PropTypes.string.isRequired,
  checkedAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  statusAuth: state.statusAuth,
  checkedAuth: state.checkedAuth,
});

export {ReviewBlock};
export default connect(mapStateToProps)(ReviewBlock);
