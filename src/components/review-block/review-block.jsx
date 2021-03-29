import React from 'react';
import Review from '/src/components/review/review';
import SelfReview from '/src/components/self-review/self-review';
import {AuthorizationStatus} from '/src/consts';
import {connect} from "react-redux";
import LoadingScreen from '/src/components/loading-screen/loading-screen';
import {getCheckedAuth, getStatusAuth} from '/src/store/user/selectors';
import {props} from './reviwe-block-prop';

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

ReviewBlock.propTypes = props;

const mapStateToProps = (state) => ({
  statusAuth: getStatusAuth(state),
  checkedAuth: getCheckedAuth(state),
});

export {ReviewBlock};
export default connect(mapStateToProps)(ReviewBlock);
