import PropTypes from "prop-types";
import React, {useState} from 'react';
import RowStars from '/src/components/row-stars/row-stars.jsx';

const SelfReview = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [textReview, setReview] = useState(``);
  const {starsData} = props;

  const handleChange = (event) => {
    const {value} = event.target;
    setReview(value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RowStars
          starsData={starsData}
        />
      </div>
      <textarea onChange={handleChange} className="reviews__textarea form__textarea" id="review" name="review"
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
  starsData: PropTypes.array.isRequired,
};

export default SelfReview;
