import React, {useRef} from 'react';
import PropTypes from "prop-types";
import RowStars from '/src/components/row-stars/row-stars';
import {connect} from "react-redux";
import {sendComment, getComments} from '/src/store/api-actions';
import {THIRD_ITEM_IN_PATH} from '/src/consts';

const SelfReview = ({submitReviewDispatch}) => {

  const textReview = useRef(null);
  const starRate = useRef(null);
  const offerId = Number(window.location.pathname.split(`/`)[THIRD_ITEM_IN_PATH]);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const checkedInput = (starRate.current).querySelector(`input:checked`);
    submitReviewDispatch({
      comment: textReview.current.value,
      rating: Number(checkedInput && checkedInput.value),
      offerId,
    });
    textReview.current.value = ``;
    checkedInput.checked = false;
  };

  return (
    <form onSubmit={handleReviewSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div ref={starRate} className="reviews__rating-form form__rating">
        <RowStars/>
      </div>
      <textarea ref={textReview} className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

SelfReview.propTypes = {
  submitReviewDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cityChecked: state.cityChecked,
});

const mapDispatchToProps = (dispatch) => ({
  submitReviewDispatch({offerId, ...data}) {
    dispatch(sendComment({offerId, ...data})).then(() => {
      dispatch(getComments(offerId));
    });
  },
});

export {SelfReview};
export default connect(mapStateToProps, mapDispatchToProps)(SelfReview);
