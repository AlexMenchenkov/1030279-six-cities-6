import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {propTypesCard} from '/src/prop-types.js';
import {FACTOR_RATE} from '/src/consts.js';
import {ActionCreator} from '/src/store/action';

const CardPlace = ({
  offer,
  id,
  classCard,
  width,
  height,
  saveOfferId,
}) => {
  const handleMouseOver = (event) => {
    const idOffer = Number(event.currentTarget.id);
    saveOfferId(idOffer);
  };

  return <article onMouseOver={handleMouseOver} id={id} className={`${classCard ? classCard + `__card ` : `cities__place-card`} place-card`}>
    {offer.isPremium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      : ``
    }
    <div className={classCard ? classCard + `__image-wrapper place-card__image-wrapper` : ``}>
      <Link to={`/offer/${offer.id}`}>
        <img className="place-card__image" src={offer.previewImage} width={width} height={height}
          alt="Place image"/>
      </Link>
      <div className={`${classCard ? classCard + `__card-info` : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${classCard ? `place-card__bookmark-button--active` : ``} place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating) * FACTOR_RATE}%`}}> </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <span>{offer.title}</span>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </div>
  </article>;
};

CardPlace.propTypes = {
  classCard: PropTypes.string,
  width: PropTypes.number,
  saveOfferId: PropTypes.func.isRequired,
  height: PropTypes.number,
  id: PropTypes.number,
  offer: PropTypes.shape(
      propTypesCard.isRequired,
  ),
};

const mapStateToProps = (state) => ({
  cityChecked: state.cityChecked,
  isDataLoaded: state.isDataLoaded,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  saveOfferId(id) {
    dispatch(ActionCreator.saveactiveIdForMap(id));
  },
});

export {CardPlace};
export default connect(mapStateToProps, mapDispatchToProps)(CardPlace);
